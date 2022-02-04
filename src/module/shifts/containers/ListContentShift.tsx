import { 
  ListContentStyled, 
  ListWrapperStyled, 
  DateHeaderStyled, 
  ShiftContentStyled, 
  ShiftContentHeaderStyled ,
  ShiftTimeWrapper,
  ShiftLocationWrapper,
  UserInfoImgStyled
} from '../stylesheets/ListContentShift.styles';
import {
  HeaderStyled,
  ImageWrapper,
  LoadingOverlayComponentStyled,
  NodataWrapper
} from '../stylesheets/Shift.styles';
import { ButtonStyled } from "../../../stylesheets/Button";
import { FORMAT_DATE, FORMAT_FULL_DATE_MONTH, Professional, AVT_LIMIT } from "../../../utils/ENUMS";
import moment from "moment-timezone";
import { useNavigate } from 'react-router-dom';
import { useGetShifts } from "../hooks/shifts.hooks";
import loadingGif from "../../../assets/images/loading.gif";
import Notification from '../../../utils/Notification';

const ListContentShift = () => {
  const navigate = useNavigate();
  const { data: shifts, isLoading, error } = useGetShifts();

  const currentDate = moment();

  const goToDetailPage = (id: string) => {
    navigate(`/${id}`);
  }

  // navigate to list professinal in detail page
  const goToProfList = (id: string) => {
    navigate(`/${id}/list`);
  }
  
  const renderDateHeader = (dateStart: moment.Moment, index: number) => {
    // hanlde start day is today
    if(currentDate.format(FORMAT_DATE) === dateStart.format(FORMAT_DATE)){
      return (
        <DateHeaderStyled first={index === 0} key={dateStart.format(FORMAT_DATE)}>
          Today - {dateStart.format(FORMAT_FULL_DATE_MONTH)}
        </DateHeaderStyled>
      );
    }
    return (
      <DateHeaderStyled first={index === 0} key={dateStart.format(FORMAT_DATE)}>
        {dateStart.format(FORMAT_FULL_DATE_MONTH)}
      </DateHeaderStyled>
    )
  }

  const renderProfesionals = (matched: Professional[], id: string) => {

    if(!matched || matched.length === 0) {
      return null;
    }

    const profesionalHTML:JSX.Element[] = [];

    matched.forEach((prof, index) => {
      if(!prof.pro.avatar) {
        return;
      }

      if(profesionalHTML.length < AVT_LIMIT) {
        profesionalHTML.push(
          <ImageWrapper className='circle' zIndex={matched.length-index} onClick={() => goToProfList(id)} key={prof.id}>
            <img src={prof.pro.avatar} alt='img'/>
          </ImageWrapper>
        )
      } else if(profesionalHTML.length === AVT_LIMIT) {
        //render last avatar
        profesionalHTML.push(
          <ImageWrapper lastImg className='circle' zIndex={matched.length-index} onClick={() => goToProfList(id)} key={prof.id}>
            <i className="fas fa-ellipsis-h"></i>
            <img src={prof.pro.avatar} alt='img'/>
          </ImageWrapper>
        )
      } else {
        return;
      }
    });

    return profesionalHTML;
  }

  const renderShifts = () => {
    
    if(!shifts || shifts.length === 0) {
      return (
        <NodataWrapper>
          No Data
        </NodataWrapper>
      )
    }

    let date = '';

    const shiftHTML:JSX.Element[] = [];

    shifts?.forEach((shift, index) => {
      const dateStart = moment(shift.dtstart).tz(shift.location.timezone);
      const dateEnd = moment(shift.dtend).tz(shift.location.timezone);
      let nightShift = false;

      // rendering Day and month header
      if(dateStart.format(FORMAT_DATE) !== date) {
        shiftHTML.push(renderDateHeader(dateStart, index));
        date = dateStart.format(FORMAT_DATE);
      }

      // handle in case of night shift
      if(dateStart.format(FORMAT_DATE) !== dateEnd.format(FORMAT_DATE)) {
        nightShift = true;
      }

      shiftHTML.push(
        <ShiftContentStyled key={shift.id}>
          <ShiftContentHeaderStyled>
            <h4 onClick={() => goToDetailPage(shift.id)}>
              {shift.slots} {shift.position}
            </h4>
            {shift.matched && shift.matched.length !== 0 ? (
              <span>{shift.matched.length} filled</span>
              ) : (
              <ButtonStyled onClick={() => goToDetailPage(shift.id)}>
                Open
              </ButtonStyled>
            )}
          </ShiftContentHeaderStyled>
          <ShiftTimeWrapper>
            <span>
              {dateStart.format("hh:mm a")} - {dateEnd.format("hh:mm a")} ({dateStart.format('z')}) {nightShift && '(Night shift)'}
            </span>
            <UserInfoImgStyled>
              {renderProfesionals(shift.matched, shift.id)}
            </UserInfoImgStyled>
          </ShiftTimeWrapper>
          <ShiftLocationWrapper>{shift.locationName} - {shift.location.address}</ShiftLocationWrapper>
        </ShiftContentStyled>
      )
    })
    return shiftHTML;
  }

  return (
    <ListWrapperStyled>
      { error && <Notification message={error} error/>}
      <HeaderStyled>
        Shifts
      </HeaderStyled>
      {isLoading ? (
      <LoadingOverlayComponentStyled>
        <img src={loadingGif} alt="loading" />
        <span>Loading...</span>
      </LoadingOverlayComponentStyled>
      ) : (
      <ListContentStyled>
        {renderShifts()}
      </ListContentStyled>
      )}
    </ListWrapperStyled>
  )
}

export default ListContentShift;