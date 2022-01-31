import { useState } from 'react';
import { useQuery } from 'react-query';
import { getShifts } from '../../../utils/apiUtils';
import moment from 'moment';
import Moment from 'react-moment';
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
import {HeaderStyled, ImageWrapper} from '../stylesheets/Shift.styles';
import {ButtonStyled} from "../../../stylesheets/Button";
import UserPhoto from './hii.jpg' 


export type Contact = {
  name: string;
  phone: string;
  createdAt: string;
}

export type Professional = {
  id: string;
  shiftId: string;
  proId: string;
  currency: string;
  orgPay: number;
  cancelledAt: any;
  proCancelledAt: any;
  attendanceSource: any;
  dtstart: string;
  dtend: string;
  pro: {
    id: string;
    avatar: string;
    firstName: string;
    lastName: string;
  },
  status: string;
}

export type Location = {
  name: string;
  address: string;
  parkingType: string;
  locationInstructions: string;
  lat: number;
  lon: number;
  locality: string;
  country: string;
  administrativeAreaLevelOne: string;
  administrativeAreaLevelTwo: string;
  administrativeAreaLevelThree: string;
  postalCode: string;
  timezone: string;
  createdAt: string;
} 

export type ShiftItemType = {
  id: string;
  groupId: string;
  position: string;
  subcategory: string;
  experienceLevel: number;
  dtstart: string;
  dtend: string;
  timezone: string;
  unpaidBreakDuration: number;
  locationName: string;
  slots: number;
  attire: string;
  additionalRequirements: string[];
  additionalInstructions: string;
  taskInstructions: string;
  basePrice: number;
  currency: string;
  pricingType: string;
  bookingFee: number;
  markupFee: number;
  priceCeiling: number;
  invoiceId: string;
  openAvailability: boolean;
  contacts: Contact[];
  proRequests: any[];
  matched: Professional[];
  matchingGroup: any;
  location: Location;
  availableSlots: number;
}

const ListContentShift = () => {
  const { data, isLoading, error } = useQuery<ShiftItemType[]>('shifts', getShifts);
    const dateTimedata = data?.map(shift => {
      const dateStart = moment(shift.dtstart);
      const dateEnd = moment(shift.dtend);
      return {dateStart: {day: dateStart.format('dddd'),do: dateStart.format('Do'), month: dateStart.format('MMMM'), year: dateStart.format('YYYY')}, dateEnd: {day: dateEnd.format('dddd'),do: dateEnd.format('Do'), month: dateEnd.format('MMMM'), year: dateEnd.format('YYYY')}};
    })
    console.log(dateTimedata);
  return (
    <ListWrapperStyled>
      <HeaderStyled>
        Shifts
      </HeaderStyled>
      <ListContentStyled>
        <DateHeaderStyled first>
          Today - Wednesday, December 1
        </DateHeaderStyled>
        <ShiftContentStyled>
          <ShiftContentHeaderStyled>
            <h4>
              16 Forklift Operators
            </h4>
            <span>16 filled</span>
          </ShiftContentHeaderStyled>
          <ShiftTimeWrapper>
            <span>7:00 am - 3:30 pm (PST)</span>
            <UserInfoImgStyled>
              <ImageWrapper className='circle' style={{zIndex:'5'}}>
                <img src={UserPhoto} alt='img'/>
              </ImageWrapper>
              <ImageWrapper className='circle' style={{zIndex:'4'}}>
                <img src={UserPhoto} alt='img'/>
              </ImageWrapper>
              <ImageWrapper className='circle' style={{zIndex:'3'}}>
                <img src={UserPhoto} alt='img'/>
              </ImageWrapper>
              <ImageWrapper className='circle' style={{zIndex:'2'}}>
                <img src={UserPhoto} alt='img'/>
              </ImageWrapper>
              <ImageWrapper lastImg count className='circle' style={{zIndex:'1'}}>
                <span>+2</span>
              </ImageWrapper>
            </UserInfoImgStyled>
          </ShiftTimeWrapper>
          <ShiftLocationWrapper>Jennifer's Warehouse - 309 W Cordova St, Vancouver, BC V6B 5A4, Canada</ShiftLocationWrapper>
        </ShiftContentStyled>
        <ShiftContentStyled>
          <ShiftContentHeaderStyled>
            <h4>
              16 Forklift Operators
            </h4>
            <span>16 filled</span>
          </ShiftContentHeaderStyled>
          <ShiftTimeWrapper>
            <span>7:00 am - 3:30 pm (PST)</span>
            <UserInfoImgStyled>
              <ImageWrapper className='circle' style={{zIndex:'5'}}>
                <img src={UserPhoto} alt='img'/>
              </ImageWrapper>
              <ImageWrapper className='circle' style={{zIndex:'4'}}>
                <img src={UserPhoto} alt='img'/>
              </ImageWrapper>
              <ImageWrapper className='circle' style={{zIndex:'3'}}>
                <img src={UserPhoto} alt='img'/>
              </ImageWrapper>
              <ImageWrapper className='circle' style={{zIndex:'2'}}>
                <img src={UserPhoto} alt='img'/>
              </ImageWrapper>
              <ImageWrapper lastImg count className='circle' style={{zIndex:'1'}}>
                <span>+2</span>
              </ImageWrapper>
            </UserInfoImgStyled>
          </ShiftTimeWrapper>
          <ShiftLocationWrapper>Jennifer's Warehouse - 309 W Cordova St, Vancouver, BC V6B 5A4, Canada</ShiftLocationWrapper>
        </ShiftContentStyled>
        <ShiftContentStyled>
          <ShiftContentHeaderStyled>
            <h4>
              16 Forklift Operators
            </h4>
            <ButtonStyled>Open</ButtonStyled>
          </ShiftContentHeaderStyled>
          <ShiftTimeWrapper>
            <span>7:00 am - 3:30 pm (PST)</span>
          </ShiftTimeWrapper>
          <ShiftLocationWrapper>Jennifer's Warehouse - 309 W Cordova St, Vancouver, BC V6B 5A4, Canada</ShiftLocationWrapper>
        </ShiftContentStyled>
        <DateHeaderStyled>
          Today - Wednesday, December 1
        </DateHeaderStyled>
        <ShiftContentStyled>
          <ShiftContentHeaderStyled>
            <h4>
              16 Forklift Operators
            </h4>
            <span>16 filled</span>
          </ShiftContentHeaderStyled>
          <ShiftTimeWrapper>
            <span>7:00 am - 3:30 pm (PST)</span>
            <UserInfoImgStyled>
              <ImageWrapper className='circle' style={{zIndex:'5'}}>
                <img src={UserPhoto} alt='img'/>
              </ImageWrapper>
              <ImageWrapper className='circle' style={{zIndex:'4'}}>
                <img src={UserPhoto} alt='img'/>
              </ImageWrapper>
              <ImageWrapper className='circle' style={{zIndex:'3'}}>
                <img src={UserPhoto} alt='img'/>
              </ImageWrapper>
              <ImageWrapper className='circle' style={{zIndex:'2'}}>
                <img src={UserPhoto} alt='img'/>
              </ImageWrapper>
              <ImageWrapper lastImg count className='circle' style={{zIndex:'1'}}>
                <span>+2</span>
              </ImageWrapper>
            </UserInfoImgStyled>
          </ShiftTimeWrapper>
          <ShiftLocationWrapper>Jennifer's Warehouse - 309 W Cordova St, Vancouver, BC V6B 5A4, Canada</ShiftLocationWrapper>
        </ShiftContentStyled>
        <ShiftContentStyled>
          <ShiftContentHeaderStyled>
            <h4>
              16 Forklift Operators
            </h4>
            <span>16 filled</span>
          </ShiftContentHeaderStyled>
          <ShiftTimeWrapper>
            <span>7:00 am - 3:30 pm (PST)</span>
            <UserInfoImgStyled>
              <ImageWrapper className='circle' style={{zIndex:'5'}}>
                <img src={UserPhoto} alt='img'/>
              </ImageWrapper>
              <ImageWrapper className='circle' style={{zIndex:'4'}}>
                <img src={UserPhoto} alt='img'/>
              </ImageWrapper>
              <ImageWrapper className='circle' style={{zIndex:'3'}}>
                <img src={UserPhoto} alt='img'/>
              </ImageWrapper>
              <ImageWrapper className='circle' style={{zIndex:'2'}}>
                <img src={UserPhoto} alt='img'/>
              </ImageWrapper>
              <ImageWrapper lastImg count className='circle' style={{zIndex:'1'}}>
                <span>+2</span>
              </ImageWrapper>
            </UserInfoImgStyled>
          </ShiftTimeWrapper>
          <ShiftLocationWrapper>Jennifer's Warehouse - 309 W Cordova St, Vancouver, BC V6B 5A4, Canada</ShiftLocationWrapper>
        </ShiftContentStyled>
        <ShiftContentStyled>
          <ShiftContentHeaderStyled>
            <h4>
              16 Forklift Operators
            </h4>
            <ButtonStyled>Open</ButtonStyled>
          </ShiftContentHeaderStyled>
          <ShiftTimeWrapper>
            <span>7:00 am - 3:30 pm (PST)</span>
          </ShiftTimeWrapper>
          <ShiftLocationWrapper>Jennifer's Warehouse - 309 W Cordova St, Vancouver, BC V6B 5A4, Canada</ShiftLocationWrapper>
        </ShiftContentStyled>
      </ListContentStyled>
    </ListWrapperStyled>
  )
}

export default ListContentShift;