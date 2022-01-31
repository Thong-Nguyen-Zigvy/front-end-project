import {HeaderStyled, ImageWrapper} from '../stylesheets/Shift.styles';
import UserPhoto from './hii.jpg' 
import {
  ShiftDetailStyled,
  LocationDetailWrapper,
  BookingDetailWrapper,
  ListProfesionalWrapper,
  ListProfesionalHeaderStyled,
  ListProfesionalContentStyled,
  InstructionWrapper
} from '../stylesheets/ShiftDetail.styles'

const ShiftDetail = () => {

  return (
    <ShiftDetailStyled>
      <HeaderStyled>
        6 Forklift Operators
      </HeaderStyled>
      <LocationDetailWrapper>
        <span className='companyName'>Jennifer's Warehouse</span>
        <span className='seperateLine'/>
        <span>309 W Cordova St, Vancouver, BC V6B 5A4, Canada</span>
      </LocationDetailWrapper>
      <BookingDetailWrapper>
        <h3>Booking</h3>
        <p className='fontBold'>Wednesday - December 1
        <span className='fontBold hourlyRate'>$22.00 hr</span></p>
        <p className='fontBold'>7:00 am - 3:30 pm (PST)</p>
        <p>30 mins break</p>
      </BookingDetailWrapper>
      <ListProfesionalWrapper>
        <ListProfesionalHeaderStyled>
          <h3>Shifts</h3>
          <p>
            <span className='fontBold'>6 Shifts</span>
            <span className='seperateLine'/>
            <span>6 profestionals matched</span>
          </p>
        </ListProfesionalHeaderStyled>
        <ListProfesionalContentStyled>
          <ImageWrapper className='circle-account' lastImg style={{zIndex:'5'}}>
            <img src={UserPhoto} alt='img'/>
          </ImageWrapper>
          <span style={{marginLeft:'15px'}}>Manan M.</span>
        </ListProfesionalContentStyled>
        <ListProfesionalContentStyled>
          <ImageWrapper className='circle-account' lastImg style={{zIndex:'5'}}>
            <img src={UserPhoto} alt='img'/>
          </ImageWrapper>
          <span style={{marginLeft:'15px'}}>Manan M.</span>
        </ListProfesionalContentStyled>
        <ListProfesionalContentStyled>
          <ImageWrapper className='circle-account' lastImg style={{zIndex:'5'}}>
            <img src={UserPhoto} alt='img'/>
          </ImageWrapper>
          <span style={{marginLeft:'15px'}}>Manan M.</span>
        </ListProfesionalContentStyled>
        <ListProfesionalContentStyled>
          <ImageWrapper className='circle-account' lastImg style={{zIndex:'5'}}>
            <img src={UserPhoto} alt='img'/>
          </ImageWrapper>
          <span style={{marginLeft:'15px'}}>Manan M.</span>
        </ListProfesionalContentStyled>
      </ListProfesionalWrapper>
      <InstructionWrapper>
        <h3>Instructions</h3>
        <p>On-site contacts: Manan</p>
        <p>No preference: ababababbabab</p>
        <p>Requirements: Must be able to lift up to 50 lbs</p>
        <p>Mandatory Masks worn on shift. regular sanitization of workplace and equipment. Temperature checks upon arrival.</p>
      </InstructionWrapper>
    </ShiftDetailStyled>
  )
}

export default ShiftDetail;