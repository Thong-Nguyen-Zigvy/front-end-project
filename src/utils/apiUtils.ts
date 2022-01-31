import {ShiftItemType} from '../module/shifts/containers/ListContentShift';
const BASE_URL = 'https://099f998e-8348-4d04-83b6-891462df8f52.mock.pstmn.io/';



export const getShifts = async (): Promise<ShiftItemType[]> => {
  const { data } = await (await fetch(`${BASE_URL}shifts/`)).json();
  return data;
}