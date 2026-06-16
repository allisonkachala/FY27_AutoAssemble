#!/usr/bin/env python3
"""Remove opaque backdrop fills from browser and view cube overlay PNGs."""

from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image


TOLERANCE = 18

# Backdrop colors sampled from Figma exports (node 82:37380 / 82:37379).
BACKDROP_COLORS = [
    (48, 48, 48),    # charcoal panel fill (#303030)
    (53, 53, 53),    # anti-aliased dark edges
    (204, 204, 204), # light gray export padding (#CCCCCC)
]


def color_distance(a: tuple[int, int, int], b: tuple[int, int, int]) -> float:
    return ((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2) ** 0.5


def is_backdrop(rgb: tuple[int, int, int]) -> bool:
    return any(color_distance(rgb, backdrop) <= TOLERANCE for backdrop in BACKDROP_COLORS)


def remove_backdrop(src: Path, dest: Path) -> None:
    img = Image.open(src).convert("RGBA")
    pixels = img.load()
    width, height = img.size
    changed = 0

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            if is_backdrop((r, g, b)):
                pixels[x, y] = (r, g, b, 0)
                changed += 1

    img.save(dest, "PNG")
    total = width * height
    print(f"{dest.name}: made {changed}/{total} pixels transparent ({100 * changed / total:.1f}%)")


def main() -> int:
    assets = Path(__file__).resolve().parents[1] / "prototype" / "assets"
    pairs = [
        (assets / "browser-ref-figma.png", assets / "browser-ref.png"),
        (assets / "viewcube-ref-figma.png", assets / "viewcube-ref.png"),
    ]

    for src, dest in pairs:
        if not src.exists():
            print(f"Missing source: {src}", file=sys.stderr)
            return 1
        remove_backdrop(src, dest)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
