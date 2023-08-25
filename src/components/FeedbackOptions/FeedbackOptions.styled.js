import styled from 'styled-components';

export const StyledButtonList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  list-style: none;
  padding-left: 0;

  button {
    padding: 20px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: #aaa;
    }
  }
`;
