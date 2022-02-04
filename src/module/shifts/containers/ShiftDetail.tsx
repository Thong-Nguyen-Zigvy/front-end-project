import { useRef, useEffect } from 'react';
import {
  HeaderStyled,
  ImageWrapper, 
  LoadingOverlayComponentStyled, 
  NodataWrapper
} from '../stylesheets/Shift.styles';
import {
  ShiftDetailStyled,
  LocationDetailWrapper,
  BookingDetailWrapper,
  ListProfesionalWrapper,
  ListProfesionalHeaderStyled,
  ListProfesionalContentStyled,
  InstructionWrapper
} from '../stylesheets/ShiftDetail.styles';
import { useParams } from 'react-router-dom';
import {FORMAT_FULL_DATE_MONTH_DETAIL, FORMAT_DATE} from "../../../utils/ENUMS";
import moment from "moment-timezone";
import { useNavigate } from 'react-router-dom';
import { useGetShifts } from '../hooks/shifts.hooks';
import DEFAULT_AVATAR from '../../../assets/images/default-avatar.jpg';
import loadingGif from "../../../assets/images/loading.gif";
import Notification from '../../../utils/Notification';

const ShiftDetail = () => {
  const navigate = useNavigate();
  const { data: shifts, isLoading, error } = useGetShifts();
  const { shiftId, prof } = useParams();

  const profRef = useRef<HTMLDivElement>(null);

  const returnToMainPage = () => {
    navigate('/');
  }

  useEffect(() => {
    // scroll to view list of profesional
    if (null !== profRef.current && prof === 'list') {
      profRef.current.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [prof]);

  if(isLoading) {
    return (
      <LoadingOverlayComponentStyled>
        <img src={loadingGif} alt="loading" />
        <span>Loading...</span>
      </LoadingOverlayComponentStyled>
    )
  }

  if(!shifts || shifts.length === 0) {
    return null;
  }

  const [shiftDetail] = shifts?.filter(shift => shift.id === shiftId);

  // handle error when user typing wrong shift id
  if(!shiftDetail || error) {
    return (
    <ShiftDetailStyled>
      <HeaderStyled>
        <i className="fas fa-arrow-left" onClick={returnToMainPage}></i>Error
      </HeaderStyled>
      <Notification message={error ? error : 'Invalid shift id'} error/>
    </ShiftDetailStyled>
    )
  }

  const dateStart = moment(shiftDetail.dtstart).tz(shiftDetail.location.timezone); 
  const dateEnd = moment(shiftDetail.dtend).tz(shiftDetail.location.timezone);

  let nightShift = false;

  if(dateStart.format(FORMAT_DATE) !== dateEnd.format(FORMAT_DATE)) {
    nightShift = true;
  }

  //format currency
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: shiftDetail.currency,
  });

  const renderProfesionals = () => {
    if(!shiftDetail.matched || shiftDetail.matched.length === 0 ){
      return (
        <NodataWrapper>
          No Professionals matched
        </NodataWrapper>
      );
    }

    return shiftDetail.matched.map(prof => {
      if(!prof.pro.avatar){
        return (
        <ListProfesionalContentStyled key={prof.id}>
          <ImageWrapper className='circle-account' lastImg>
            <img src={DEFAULT_AVATAR} alt='img'/>
          </ImageWrapper>
          <span style={{marginLeft:'15px'}}>{prof.pro.firstName} {prof.pro.lastName[0]}.</span>
        </ListProfesionalContentStyled>
        )
      }
      return (
        <ListProfesionalContentStyled key={prof.id}>
          <ImageWrapper className='circle-account' lastImg>
            <img src={prof.pro.avatar} alt='img'/>
          </ImageWrapper>
          <span style={{marginLeft:'15px'}}>{prof.pro.firstName} {prof.pro.lastName[0]}.</span>
        </ListProfesionalContentStyled>
        )
    })
  }

  const renderAttirePref = () => {
    if(shiftDetail.attire === 'no-preference') {
      return 'No preference: No preference regarding attire'
    }

    return `Attire preference: ${shiftDetail.attire}`;
  }

  const renderRequirements = () => {
    if(!shiftDetail.additionalRequirements || shiftDetail.additionalRequirements.length === 0){
      return 'No requirement';
    }

    return shiftDetail.additionalRequirements.join(', ');
  }

  const renderContacts = () => {
    if(!shiftDetail.contacts || shiftDetail.contacts.length === 0) {
      return 'No contacts available';
    }
    const contactNames = shiftDetail.contacts.map(contact => contact.name);
    return contactNames.join(', ');

  }

  return (
    <ShiftDetailStyled>
      <HeaderStyled>
        <i className="fas fa-arrow-left" onClick={ returnToMainPage } />
        { shiftDetail.matched.length } { shiftDetail.position }
      </HeaderStyled>
      <LocationDetailWrapper>
        <span className='companyName'>{ shiftDetail.locationName }</span>
        <span className='seperateLine'/>
        <span>{ shiftDetail.location.address }</span>
      </LocationDetailWrapper>
      <BookingDetailWrapper>
        <h3>Booking</h3>
        <p className='fontBold date'>
          <span>{ dateStart?.format(FORMAT_FULL_DATE_MONTH_DETAIL) }</span> 
          <span className='fontBold hourlyRate'>{ formatter.format(shiftDetail.basePrice / 100) } hr</span>
        </p>
        <p className='fontBold'>
          { dateStart.format("hh:mm a") } - { dateEnd.format("hh:mm a") } ({ dateStart.format('z') }) {nightShift && '(Night shift)'}
        </p>
        <p>{ shiftDetail.unpaidBreakDuration } mins break</p>
      </BookingDetailWrapper>
      <ListProfesionalWrapper ref={ profRef }>
        <ListProfesionalHeaderStyled>
          <h3>Shifts</h3>
          <p>
            <span className='fontBold'>{ shiftDetail.slots } Shifts</span>
            <span className='seperateLine'/>
            <span>{ shiftDetail.matched.length } profestionals matched</span>
          </p>
        </ListProfesionalHeaderStyled>
        { renderProfesionals() }
      </ListProfesionalWrapper>
      <InstructionWrapper>
        <h3>Instructions</h3>
        <p><i className='far fa-user'></i><span>On-site contacts: { renderContacts() }</span></p>
        <p><i className='far fa-user'></i><span>{ renderAttirePref() }</span></p>
        <p><i className='far fa-user'></i><span>Requirements: { renderRequirements() }</span></p>
        <p><i className='far fa-user'></i><span>{ shiftDetail.additionalInstructions }</span></p>
      </InstructionWrapper>
    </ShiftDetailStyled>
  )
}

export default ShiftDetail;