import { styled } from 'styled-components';

export const HomeWrap = styled('div')(() => {
  return {
    marginLeft: 40,
    marginRight: 40,
    '& h2': {
      marginTop: 20,
      marginBottom: 15,
    },
    '& div': {
      '& ul': {
        '& li': {
          marginBottom: 3,
          fontWeight: 500,
          fontSize: 16,
          lineHeight: 1.5,
          letterSpacing: '0.02em',
          '& a': {
            color: '#6e6d00',
            '&:hover': {
              color: 'orange',
              transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
          },
        },
      },
    },
  };
});