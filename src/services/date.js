import moment from "moment";
import "moment/locale/fr";

export const getFirstWeekDay = day => day.startOf("week");
export const getLastWeekDay = day => day.endOf("week").day(-2);
export const getToday = () => moment();
export const getWeekNb = f => f.week();
export const getMomentFromDate = date => moment(date);

export const getDayByWeek = (day, nb) => {
  return moment()
    .day(day)
    .hour(0)
    .minute(0)
    .second(0)
    .millisecond(0)
    .week(nb);
};

export const getRange = (start, end) => {
  let dates = [];
  let currentDate = moment(start);
  let stopDate = moment(end);

  while (currentDate <= stopDate) {
    dates.push(moment(currentDate).toDate());
    currentDate = moment(currentDate).add(1, "days");
  }

  return dates;
};
