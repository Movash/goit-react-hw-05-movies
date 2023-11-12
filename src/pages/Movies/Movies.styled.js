import { styled } from 'styled-components';

export const MoviesWrap = styled('div')(() => {
  return {
    marginTop: 65,
    paddingTop: 15,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 20,
    textAlign: 'center',
    '& form': {
      '& input': {
        height: 40,
        width: 300,
        marginBottom: 20,
        marginRight: 10,
        outline: 'none',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 1.5,
        letterSpacing: '0.02em',
        color: '#2E2F42',
        border: '1px solid grey',
        backgroundColor: '#f1ffd2',
        borderRadius: '5px',
        padding: '5px 15px',
        boxShadow:
          'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      },
      '& button': {
        height: 40,
        marginBottom: 20,
        fontSize: 16,
        lineHeight: 1.5,
        letterSpacing: '0.02em',
        color: '#2E2F42',
        border: '1px solid grey',
        backgroundColor: '#f1ffd2',
        borderRadius: '5px',
        padding: '5px 15px',
        boxShadow:
          'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        '&:hover': {
          backgroundColor: 'orange',
          transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '& svg': {
          height: 20,
          width: 20,
        },
      },
    },
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
  };
});
