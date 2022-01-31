import styled, { css }from "styled-components";

export const ListWrapperStyled = styled.div`
  max-width: 30rem;
  margin: 1.5rem auto;
`

export const ListContentStyled = styled.div`
  margin-top: 4rem;
`

export const DateHeaderStyled = styled('div')<{first?: boolean}>`
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  width: 100%;
  border: 1px solid var(--borderColor);
  border-bottom: none;
  padding: 1.5rem;
  font-weight: 600;
  font-size: var(--fontMed);
  ${(props) =>
      props.first &&
      css`
        border-radius: 5px 5px 0px 0px;
      `}
`

export const ShiftContentStyled = styled.div`
  width: 100%;
  background-color: var(--white);
  border: 1px solid var(--borderColor);
  border-top: none;
  border-bottom: 2px solid var(--borderColorDark);
  padding: 1.5rem;
`
export const ShiftContentHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4{
    font-size: 1.1rem;
  }
`

export const ShiftTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`

export const ShiftLocationWrapper = styled.div`
  max-width: 60%;
  margin-top: .5rem;
  line-height: 1.4;
`

export const UserInfoImgStyled = styled.div`
  display: flex;
`