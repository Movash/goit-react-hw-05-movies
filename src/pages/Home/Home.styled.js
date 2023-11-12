import { styled } from 'styled-components';

export const HomeWrap = styled('div')(() => {
  return {
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 20,
    paddingTop: 15,
    marginTop: 65,
    '& h2': {
      marginBottom: 20,
      textAlign: 'center',
      fontSize: 40,
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