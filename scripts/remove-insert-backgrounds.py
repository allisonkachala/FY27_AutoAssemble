#!/usr/bin/env python3
"""Remove opaque backgrounds from component insert PNGs."""

from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image

BLACK_THRESHOLD = 35
GRID_LUM_MIN = 78
GRID_LUM_MAX = 135
GRID_CONTRAST = 14


def remove_black_background(img: Image.Image) -> int:
    pixels = img.load()
    width, height = img.size
    changed = 0

    for y in range(height):
        for x in range(width):
            red, green, blue, alpha = pixels[x, y]
            if alpha and red < BLACK_THRESHOLD and green < BLACK_THRESHOLD and blue < BLACK_THRESHOLD:
                pixels[x, y] = (red, green, blue, 0)
                changed += 1

    return changed


def remove_grid_artifacts(img: Image.Image) -> int:
    pixels = img.load()
    width, height = img.size
    changed = 0

    for y in range(1, height - 1):
        for x in range(1, width - 1):
            red, green, blue, alpha = pixels[x, y]
            if alpha < 128:
                continue
            if abs(red - green) > 6 or abs(green - blue) > 6:
                continue

            luminance = (red + green + blue) / 3
            if not GRID_LUM_MIN <= luminance <= GRID_LUM_MAX:
                continue

            neighbors = []
            for dx, dy in (
                (-1, 0), (1, 0), (0, -1), (0, 1),
                (-1, -1), (1, 1), (-1, 1), (1, -1),
            ):
                nr, ng, nb, na = pixels[x + dx, y + dy]
                if na > 128:
                    neighbors.append((nr + ng + nb) / 3)

            if len(neighbors) >= 5:
                average = sum(neighbors) / len(neighbors)
                if abs(luminance - average) >= GRID_CONTRAST:
                    pixels[x, y] = (red, green, blue, 0)
                    changed += 1

    return changed


def process_image(src: Path, dest: Path) -> None:
    img = Image.open(src).convert("RGBA")
    black_removed = remove_black_background(img)
    grid_removed = remove_grid_artifacts(img)
    img.save(dest, "PNG")
    print(
        f"{dest.name}: removed {black_removed} black pixels, "
        f"{grid_removed} grid artifacts"
    )


def main() -> int:
    assets = Path(__file__).resolve().parents[1] / "prototype" / "assets"
    pairs = [
        (assets / "component-insert-source.png", assets / "component-insert.png"),
    ]

    for src, dest in pairs:
        if not src.exists():
            print(f"Missing source: {src}", file=sys.stderr)
            return 1
        process_image(src, dest)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
