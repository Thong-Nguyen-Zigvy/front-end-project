import styled, { css } from "styled-components";
import { devices } from "../../../stylesheets/GlobalStyle";

export const HeaderStyled = styled.h2`
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-weight: 700;
  font-size: var(--fontSuperBig);
  position: relative;
  margin-bottom: 8rem;
  i {
    position: absolute;
    top: 5px;
    left: -8rem;
    :hover {
      cursor: pointer;
    }
    @media ${devices.mobile} {
      display: none;
    }
  }

  @media ${devices.tabPort} {
    width: fit-content;
    margin: 0px auto;
  }
`

export const ImageWrapper = styled("div")<{lastImg?: boolean, count?: boolean, zIndex?: number}>`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: -.8rem;
  z-index: ${(props) => props.zIndex};
  border-radius: 50%;
  border: 2px solid #ffffff;
  ${(props) =>
    props.lastImg &&
    css`
      margin-right: 0px;
      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-40%, -50%);
        color: var(--ColorDark);
      }
      background-color: var(--black);
      :hover {
        cursor: pointer;
      }
      :hover{
        opacity: .8;
      }
    `}

  &.circle > img {
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    padding: 0px;
    object-fit: cover;
    overflow: hidden;
    ${(props) =>
      props.lastImg &&
      css`
        opacity: 0.4;
      `}
    :hover {
      cursor: pointer;
    }
  }

  &.circle-account {
    > img {
      border: none;
      border-radius: 50%;
      width: 4.5rem;
      height: 4.5rem;
      max-height: 4.5rem;
      padding: 0px;
      overflow: hidden;
      object-fit: cover;
    }
    &:hover {
      cursor: pointer;
    }
  }
`

export const LoadingOverlayComponentStyled = styled.div`
  display: flex;
  padding: 1.5rem;
  background-color: rgba(1, 1, 1, 0.12) !important;
  justify-content: center;
  align-items: center;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute !important;

  img {
    width: 3rem;
    height: 3rem;
  }

  span {
    margin-left: 1rem;
    font-size: 1.6rem;
    line-height: 2rem;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    color: var(--primaryColor);
  }
`;

export const NodataWrapper = styled.div`
  width: 100%;
  background-color: var(--white);
  text-align: center;
  padding: 10rem;
  color: var(--darkGrey);
`;