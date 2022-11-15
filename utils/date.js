import dayjs from "dayjs";
import { DAY_MILLISECONDS, END_DAY } from "./constants";

export function getRestDay() {
  return Math.ceil(
    (new Date(END_DAY).getTime() - Date.now()) / DAY_MILLISECONDS
  );
}

export function getCurrentDate() {
  return dayjs().format("YYYY[年]/MM[月]/DD[日]");
}
