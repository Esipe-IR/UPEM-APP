/**
 * VIEW
 */
export const RCV_VIEW = "calendar/RCV::VIEW"

export const receiveView = (view) => ({
  type: RCV_VIEW,
  payload: view
})

/**
 * DAY
 */
export const RCV_DAY = "calendar/RCV::DAY"
export const RCV_DAY_EVENTS = "calendar/RCV::DAY::EVENTS"
export const ASK_DAY_EVENTS = "calendar/ASK::DAY::EVENTS"
export const RCV_FOCUSED = "calendar/RCV::FOCUSED"

export const receiveDay = (day) => ({
  type: RCV_DAY,
  payload: day
})

export const receiveDayEvents = (events) => ({
  type: RCV_DAY_EVENTS,
  payload: events
})

export const askDayEvents = (params) => ({
  type: ASK_DAY_EVENTS,
  payload: params
})

export const receiveFocused = (focused) => ({
  type: RCV_FOCUSED,
  payload: focused
})

/**
 * WEEK
 */
export const RCV_WEEK = "calendar/RCV::WEEK"
export const RCV_WEEK_EVENTS = "calendar/RCV::WEEK::EVENTS"
export const ASK_WEEK_EVENTS = "calendar/ASK::WEEK::EVENTS"

export const receiveWeek = (week) => ({
  type: RCV_WEEK,
  payload: week
})

export const receiveWeekEvents = (events) => ({
  type: RCV_WEEK_EVENTS,
  payload: events
})

export const askWeekEvents = (params) => ({
  type: ASK_WEEK_EVENTS,
  payload: params
})

/**
 * RESOURCES
 */
export const RCV_RESOURCES = "calendar/RCV::RESOURCES"
export const ASK_RESOURCES = "calendar/ASK::RESOURCES"

export const receiveResources = (resources) => ({
  type: RCV_RESOURCES,
  payload: resources
})

export const askResources = () => ({
  type: ASK_RESOURCES
})
