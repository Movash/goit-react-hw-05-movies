import { styled } from 'styled-components';

export const ReviewsWrap = styled('div')(() => {
  return {
    marginTop: 20,
    '& ul': {
      '& li': {
        '& h3': {
          marginBottom: 10,
        },
        '& p': {
          marginBottom: 20,
        },
      },
    },
  };
});
