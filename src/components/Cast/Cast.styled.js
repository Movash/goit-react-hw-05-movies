import { styled } from 'styled-components';

export const CastWrap = styled('div')(() => {
  return {
    marginTop: 20,
    '& ul': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 20,
      '& li': {
        border: '1px solid grey',
        width: 200,
        borderRadius: '10px',
        backgroundColor: '#111',
        '& img': {
          borderRadius: '10px',
          marginBottom: 10,
          height: 300,
        },
        '& p': {
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 5,
          marginRight: 5,
          color: '#6e6d00',
          textAlign: 'center',
        },
      },
    },
  };
});
