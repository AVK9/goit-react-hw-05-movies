import styled from '@emotion/styled';

export const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center;
  justify-content: center; */
  gap: ${({ theme }) => theme.spacing(5)};
`;

// export const GridItem = styled.li`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
