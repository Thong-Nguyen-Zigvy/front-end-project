import styled from "styled-components";

export const NotificationWrapper = styled('div')<{top?: number, error?: boolean}>`
  position: absolute;
  top: ${props => props.top}%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.error ? '#cc0000' : 'rgb(179, 218, 86)'};
  color: white;
  z-index: 999;
  padding: 1rem;
  transition: top .8s ease;
  border-radius: 0px 0px 5px 5px;
  display: flex;
  align-items: center;

  img {
    margin-right: 1rem;
  }
`