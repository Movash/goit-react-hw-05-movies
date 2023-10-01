import { styled } from 'styled-components';

export const DetailsWrap = styled('div')(() => {
  return {
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    '& button': {
      height: 30,
      padding: '0px 15px',
      marginBottom: 5,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: '0.02em',
      color: '#2E2F42',
      border: '1px solid #6e6d00',
      backgroundColor: '#f1ffd2',
      borderRadius: '5px',
      boxShadow:
        'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      '&:hover': {
        backgroundColor: '#d1c1a4',
        transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
    '& .card-wrapper': {
      display: 'flex',
      '& .film-image': {
        backgroundColor: '#dde3ff',
        display: 'flex',
        alignItems: 'center',
        marginRight: 15,
        minWidth: 300,
      },
      '& div': {
        '& h2': {
          marginBottom: 20,
        },
        '& h3': {
          marginTop: 20,
          marginBottom: 20,
        },
        '& h4': {
          marginTop: 10,
          marginBottom: 10,
        },
        '& ul': {
          display: 'flex',
          '& li': {
            marginRight: 20,
          },
        },
      },
    },
    '& .add-info': {
      marginTop: 10,
      marginBottom: 10,
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.5,
      letterSpacing: '0.02em',
    },
    '& a': {
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.5,
      letterSpacing: '0.02em',
      marginRight: 40,
      '&:hover': {
        color: 'orange',
        transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  };
});
