import styled from "styled-components";
import { devices } from "../../../stylesheets/GlobalStyle";

export const ShiftDetailStyled = styled.div`
  max-width: 48rem;
  margin: 3rem auto;
  .seperateLine {
    font-weight: 600;
    margin: 0px .8rem;
    width: 1px;
    height: 4px;
    border: 1px solid var(--primaryColor);
  }

  @media ${devices.mobile} {
    max-width: none;
    width: 100vw;
  }

  @media ${devices.tabPort} {
    .seperateLine {
      display: none;
    }
  }

`

export const LocationDetailWrapper = styled.div`
  margin-top: 5rem;

  .companyName {
    font-weight: 600;
  }
  @media ${devices.tabPort} {
    display: flex;
    flex-direction: column;
    text-align: center;
    span {
      margin-bottom: 1rem;
    }
    .companyName {
      font-weight: 600;
      font-size: var(--fontBig);
    }
  }
`

const GeneralWrapper = styled.div`
  width: 100%;
  background-color: var(--white);
  border: 1px solid var(--borderColor);
  padding: 2.5rem 2rem;
  border-radius: 5px;
  margin-top: 2rem;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 10%);

  h3 {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: var(--fontBig);
  }
  p {
    margin-top: 1.6rem;
  }
  .fontBold {
    font-weight: 600;
  }

  @media ${devices.tabPort} {
    text-align: center;
  }
`

export const BookingDetailWrapper = styled(GeneralWrapper)`
  .hourlyRate {
    margin-left: 4.2rem;
    letter-spacing: 0.1rem;
  }

  @media ${devices.tabPort} {
    .date {
      display: flex;
      flex-direction: column;
    }
    .hourlyRate {
      margin: 1.6rem 0px 0px 0px;
    }
  }
`

export const ListProfesionalWrapper = styled(GeneralWrapper)`
  padding: 0rem;
`

export const ListProfesionalHeaderStyled = styled.div`
  padding: 2rem;
  @media ${devices.tabPort} {
    p {
      display: flex;
      flex-direction: column;

      span:not(:first-child) {
        margin-top: 1.6rem;
      }
    }
  }
`
export const ListProfesionalContentStyled = styled.div`
  padding: 2.5rem 2rem;
  border-bottom: 1px solid var(--borderColorDark);
  display: flex;
  align-items: center;

`

export const InstructionWrapper = styled(GeneralWrapper)`
  padding: 2.5rem 2rem;
  h3 {
    margin-bottom: 1.6rem;
  }

  p {
    margin: 1rem 0rem 0rem 2rem;
    display: flex;
  }

  span {
    padding-left: 1rem;
    text-align: left;
  }
`

