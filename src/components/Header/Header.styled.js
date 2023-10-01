import { styled } from 'styled-components';

export const Nav = styled('nav')(() => {
  return {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottom: '1px solid gray',
    boxShadow: '0px 5px 5px gray',
    '& div': {
      '& a': {
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 1.5,
        letterSpacing: '0.02em',
        marginLeft: 40,
        '&.active': {
          color: 'orange',
        },
      },
    },
  };
});
