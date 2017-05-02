import moment from 'moment'
import 'moment/locale/fr'

export const getFirstWeekDay = () => {
  return moment().startOf('week')
}

export const getLastWeekDay = () => {
  return moment().endOf('week').day(-2)
}

export const getToday = () => {
  return moment()
} 

export const getWeekNb = (f) => {
  return f.week();
}

export const getDayByWeek = (day, nb) => {
  return moment().day(day).hour(0).minute(0).second(0).millisecond(0).week(nb)
}

export const getMomentFromDate = (date) => {
  return moment(date)
}
