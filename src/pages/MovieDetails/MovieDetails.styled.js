import { styled } from 'styled-components';

export const DetailsWrap = styled('div')(() => {
  return {
    marginTop: 5,
    paddingTop: 5,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 20,
    '& button': {
      height: 30,
      padding: '0px 15px',
      marginBottom: 5,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: '0.02em',
      color: 'white',
      border: '1px solid #aeaaff',
      backgroundColor: '#4554b1',
      borderRadius: '5px',
      boxShadow:
        'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      '&:hover': {
        backgroundColor: 'orange',
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
    '& .card-wrapper': {
      display: 'flex',
      width: 1000,
      margin: 'auto',
      '& .film-image': {
        backgroundColor: '#a4c4ff',
        display: 'flex',
        alignItems: 'center',
        marginRight: 15,
        minWidth: 500,
      },
      '& .film-descr': {
        width: 500,
        '& h2': {
          marginBottom: 20,
        },
        '& h3': {
          marginTop: 15,
          marginBottom: 5,
        },
        '& h4': {
          marginTop: 15,
          marginBottom: 5,
        },
        '& ul': {
          display: 'flex',
          '& li': {
            marginRight: 20,
          },
        },
      },
    },
    '& .add-info-wrapper': {
      textAlign: 'center',
      '& .add-info': {
        marginTop: 30,
        marginBottom: 10,
        fontWeight: 700,
        fontSize: 30,
        lineHeight: 1.5,
        letterSpacing: '0.02em',
      },
      '& .add-info-cast': {
        marginRight: 40,
      },
      '& a': {
        fontWeight: 700,
        fontSize: 26,
        lineHeight: 1.5,
        letterSpacing: '0.02em',
        color: '#0000a5',
        '&:hover': {
          color: 'orange',
          transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
  };
});
