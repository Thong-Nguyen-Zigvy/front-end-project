import styled, { css } from "styled-components";

export const HeaderStyled = styled.h2`
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-weight: 700;
  font-size: 2rem;
`

export const ImageWrapper = styled("div")<{lastImg?: boolean, count?: boolean}>`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: -.6rem;
  ${(props) =>
      props.lastImg &&
      css`
        margin-right: 0px;
      `}
  ${(props) =>
      props.count &&
      css`
        border: 2px solid #ffffff;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        max-height: 40px;
        padding: 0px;
        background-color: var(--ColorDark);
        color: #f2f2f2;
        span {
          margin: 0px .4rem 0px auto;
          font-size: 1.1rem;
        }
      `}

  &.circle > img {
    border: 2px solid #ffffff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 0px;
  }

  &.circle-account {
    > img {
      border: 2px solid #ffffff;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      max-height: 45px;
      padding: 0px;
    }
    &:hover {
      cursor: pointer;
    }
  }
`