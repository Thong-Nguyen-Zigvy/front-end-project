import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: var(--buttonbgColor);
  color: var(--buttonColor);
  font-weight: 600;
  font-size: var(--fontSmall);
  border-radius: 5px;
  padding: .4rem .6rem;
  border: none;
  :hover{
    cursor: pointer;
  }
`