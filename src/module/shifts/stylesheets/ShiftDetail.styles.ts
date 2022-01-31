import styled from "styled-components";

export const ShiftDetailStyled = styled.div`
  max-width: 30rem;
  margin: 1.5rem auto;
  .seperateLine {
    font-weight: 600;
    margin: 0px .5rem;
    width: 1px;
    height: 4px;
    border: 1px solid var(--primaryColor);
  }
`

export const LocationDetailWrapper = styled.div`
  margin-top: 5rem;

  .companyName{
    font-weight: 600;
  }
`

const GeneralWrapper = styled.div`
  width: 100%;
  background-color: var(--white);
  border: 1px solid var(--borderColor);
  padding: 1.5rem;
  border-radius: 5px;
  margin-top: 2rem;
  h3 {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 1.4rem;
  }
  p {
    margin-top: .8rem;
  }
  .fontBold {
    font-weight: 600;
  }
`

export const BookingDetailWrapper = styled(GeneralWrapper)`
  .hourlyRate {
    margin-left: 1.5rem;
  }
`

export const ListProfesionalWrapper = styled(GeneralWrapper)`
  padding: 0rem;
`

export const ListProfesionalHeaderStyled = styled.div`
  padding: 1.5rem;
`
export const ListProfesionalContentStyled = styled.div`
  padding: 2rem 1.5rem;
  border-bottom: 1px solid var(--borderColorDark);
  display: flex;
  align-items: center;

`

export const InstructionWrapper = styled(GeneralWrapper)`
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  p {
    margin: .5rem 0rem 0rem 2rem;
  }
`

