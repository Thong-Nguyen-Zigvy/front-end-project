import { useQuery } from "react-query";
import { getShifts } from "../../../utils/apiUtils";

import { ShiftItemType } from "../../../utils/ENUMS";

export enum ServerStateKeysEnum {
  Shifts = 'shifts'
} 

export const useGetShifts = () =>
  useQuery<ShiftItemType[]>(
    ServerStateKeysEnum.Shifts,
    getShifts
  );