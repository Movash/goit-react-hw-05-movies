import { styled } from 'styled-components';

export const GalleryList = styled('ul')(() => {
  return {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'center',
  };
});
