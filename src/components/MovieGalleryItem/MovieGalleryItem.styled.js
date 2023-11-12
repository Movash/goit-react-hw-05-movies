import { styled } from 'styled-components';

export const GalleryItem = styled('li')(() => {
  return {
    border: '1px solid grey',
    width: 400,
    borderRadius: '10px',
    boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
    backgroundColor: '#111',
    '& img': {
      borderRadius: '10px',
      marginBottom: 10,
      height: 225,
    },
    '& p': {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 5,
      marginRight: 5,
      textAlign: 'center',
    },
  };
});
