import { styled } from 'styled-components';

export const CastWrap = styled('div')(() => {
  return {
    marginTop: 20,
    '& ul': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 20,
      '& li': {
        border: '1px solid grey',
        width: 200,
        borderRadius: '10px',
        '& img': {
          borderRadius: '10px',
          marginBottom: 10,
        },
        '& p': {
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 5,
          marginRight: 5,
        },
      },
    },
  };
});
