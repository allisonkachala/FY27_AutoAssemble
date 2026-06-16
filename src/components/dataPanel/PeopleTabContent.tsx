import { Avatar, Box, Stack, Typography } from '@weave-mui/material';
import type { Person } from '../../types';

interface PeopleTabContentProps {
  people: Person[];
}

/**
 * People tab — inferred layout (no dedicated Figma frame).
 * Uses Weave Avatar + Typography in a list pattern consistent with Data tab density.
 */
export function PeopleTabContent({ people }: PeopleTabContentProps) {
  return (
    <Stack spacing={1.5} role="list" aria-label="Project members">
      {people.map((person) => (
        <Box
          key={person.id}
          role="listitem"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            p: 2,
            borderRadius: '12px',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            backgroundColor: '#F7F7F7',
            cursor: 'default',
            transition: 'background-color 0.15s ease',
            '&:hover': {
              backgroundColor: '#EFEFEF',
            },
            '&:focus-visible': {
              outline: 'none',
              boxShadow: '0 0 0 2px #38ABDF',
            },
          }}
          tabIndex={0}
        >
          <Avatar aria-hidden="true" sx={{ width: 40, height: 40, bgcolor: '#009CE3', fontSize: 14 }}>
            {person.avatarInitials}
          </Avatar>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography sx={{ fontSize: 14, fontWeight: 700, color: '#363636' }}>{person.name}</Typography>
            <Typography sx={{ fontSize: 12, color: '#666' }}>{person.role}</Typography>
            <Typography sx={{ fontSize: 12, color: '#888', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {person.email}
            </Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  );
}
