import { Box, IconButton, Typography } from '@weave-mui/material';
import { useState } from 'react';
import { MOCK_BROWSER_TREE } from '../../data/dataPanel.mock';
import type { BrowserNode } from '../../types';

/**
 * Fusion Browser panel — simplified tree with expand/collapse.
 * Gap: Fusion browser nodes are product-specific; TreeView styling approximated.
 */
export function FusionBrowser() {
  const [tree, setTree] = useState<BrowserNode[]>(MOCK_BROWSER_TREE);

  const toggleNode = (nodeId: string) => {
    const toggleInTree = (nodes: BrowserNode[]): BrowserNode[] =>
      nodes.map((node) => {
        if (node.id === nodeId) {
          return { ...node, expanded: !node.expanded };
        }
        if (node.children) {
          return { ...node, children: toggleInTree(node.children) };
        }
        return node;
      });
    setTree(toggleInTree(tree));
  };

  return (
    <Box
      aria-label="Browser"
      sx={{
        position: 'absolute',
        top: 8,
        left: 12,
        width: 301,
        backgroundColor: 'rgba(45, 45, 45, 0.92)',
        borderRadius: 1,
        color: '#E0E0E0',
        fontSize: 12,
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 1,
          py: 0.5,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.5, color: '#AAA' }}>
          BROWSER
        </Typography>
        <IconButton size="small" aria-label="Browser options" sx={{ color: '#AAA', p: 0.25 }}>
          <Box sx={{ width: 12, height: 12, border: '1px solid currentColor', borderRadius: 0.5 }} />
        </IconButton>
      </Box>
      <Box sx={{ py: 0.5, maxHeight: 200, overflowY: 'auto' }} role="tree">
        {tree.map((node) => (
          <BrowserTreeNode key={node.id} node={node} onToggle={toggleNode} />
        ))}
      </Box>
    </Box>
  );
}

function BrowserTreeNode({
  node,
  onToggle,
}: {
  node: BrowserNode;
  onToggle: (id: string) => void;
}) {
  const hasChildren = Boolean(node.children?.length);
  const isExpanded = node.expanded ?? false;

  return (
    <>
      <Box
        role="treeitem"
        aria-expanded={hasChildren ? isExpanded : undefined}
        sx={{
          display: 'flex',
          alignItems: 'center',
          pl: 1 + node.depth * 1.5,
          pr: 1,
          py: 0.25,
          cursor: hasChildren ? 'pointer' : 'default',
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.06)' },
        }}
        onClick={() => hasChildren && onToggle(node.id)}
      >
        {hasChildren && (
          <Typography sx={{ fontSize: 8, mr: 0.5, color: '#888', width: 10 }}>
            {isExpanded ? '▼' : '▶'}
          </Typography>
        )}
        {!hasChildren && <Box sx={{ width: 10, mr: 0.5 }} />}
        {node.visible !== undefined && (
          <Box
            sx={{ width: 14, height: 14, mr: 0.5, opacity: node.visible ? 1 : 0.3 }}
            aria-label={node.visible ? 'Visible' : 'Hidden'}
          >
            👁
          </Box>
        )}
        <Typography sx={{ fontSize: 12, color: '#E0E0E0' }}>{node.label}</Typography>
      </Box>
      {hasChildren && isExpanded &&
        node.children!.map((child) => (
          <BrowserTreeNode key={child.id} node={child} onToggle={onToggle} />
        ))}
    </>
  );
}
