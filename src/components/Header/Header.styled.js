import { styled } from 'styled-components';

export const Nav = styled('nav')(() => {
  return {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottom: '1px solid #4f67ff',
    boxShadow: '0px 5px 5px #4f67ff',
    backgroundColor: '#4554b1',
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
