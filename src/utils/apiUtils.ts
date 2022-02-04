import {ShiftItemType, BASE_URL} from './ENUMS';

export const getShifts = async (): Promise<ShiftItemType[]> => {
  const { data } = await (await fetch(`${BASE_URL}shifts/`)).json();
  return data;
}