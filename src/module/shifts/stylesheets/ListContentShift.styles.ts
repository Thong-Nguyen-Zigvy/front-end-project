import styled, { css }from "styled-components";
import { devices } from "../../../stylesheets/GlobalStyle";

export const ListWrapperStyled = styled.div`
  max-width: 48rem;
  margin: 3rem auto;
  @media ${devices.mobile} {
    max-width: none;
    width: 100vw;
  }
`

export const ListContentStyled = styled.div`
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 10%);
  border-radius: 5px;
`

export const DateHeaderStyled = styled('div')<{first?: boolean}>`
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  width: 100%;
  border: 1px solid var(--borderColor);
  border-bottom: none;
  padding: 2rem 1.5rem;
  font-weight: 600;
  font-size: var(--fontBig);
  ${(props) =>
      props.first &&
      css`
        border-radius: 5px 5px 0px 0px;
      `}
  @media ${devices.tabPort} {
    text-align: center;
  }
`

export const ShiftContentStyled = styled.div`
  width: 100%;
  background-color: var(--white);
  border: 1px solid var(--borderColor);
  border-top: none;
  border-bottom: 2px solid var(--borderColorDark);
  padding: 2.5rem 1.5rem;
`
export const ShiftContentHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4{
    font-size: var(--fontMed);
    border-bottom: 1px solid var(--white);
    :hover{
      cursor: pointer;
      border-bottom: 1px solid var(--primaryColor);
    }
  }
  @media ${devices.mobile} {
    flex-direction: column;
    h4{
      margin-bottom: 1.5rem;
    }
  }
`

export const ShiftTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  @media ${devices.mobile} {
    flex-direction: column-reverse;
  }
`

export const ShiftLocationWrapper = styled.div`
  max-width: 70%;
  margin-top: .5rem;
  line-height: 1.4;
  @media ${devices.mobile} {
    max-width: none;
    text-align: center;
    margin-top: 1.5rem;
    padding: 0px 3rem;
  }
`

export const UserInfoImgStyled = styled.div`
  display: flex;
  @media ${devices.mobile} {
    margin-bottom: 1.5rem;
  }
`