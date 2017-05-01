export const eventToDate = (event) => {
  let d = parseInt(event.date.substring(0,2), 10)
  let m = parseInt(event.date.substring(3,5), 10)
  let y = parseInt(event.date.substring(6,10), 10)

  return new Date(y, m - 1, d)
}

export const dateToTimestamp = (date) => {
  return date.getTime() / 1000  
}

const getWeekTimestamp = (f, l) => {
  let days = []

  for (let i = f; i < l; i += 24*60*60) {
    days.push(i)
  }

  return days
}

const getRangeFormat = (result, params) => {
  const f = params.startDate.unix()
  const l = params.endDate.unix()

  let days = getWeekTimestamp(f, l)
  let events = []
  let hours = []
  let x = 0

  result.forEach(element => {
    if (!hours[x]) hours[x] = element.startHour
    if (hours[x] !== element.startHour) {
      x++
      hours[x] = element.startHour
    }

    let d = eventToDate(element)
    let timestamp = dateToTimestamp(d)    
    let y = days.indexOf(timestamp)
    
    if (!events[x]) events[x] = []
    events[x][y] = element
  });

  events.forEach(e => {
   for (let i = 0; i < e.length; i++) {
     if (!e[i]) e[i] = null
   }
  })

  return {events: events, range: hours}
}

export const getFormatedEvents = (result, params) => {
  if (!result || !result.calendar || !result.calendar.events || !params.startDate) return null
  return getRangeFormat(result.calendar.events, params)
}
