export const RCV_VIEW = "calendar/RCV::VIEW"
export const RCV_DAY = "calendar/RCV::DAY"
export const RCV_WEEK = "calendar/RCV::WEEK"
export const RCV_FOCUSED = "calendar/RCV::FOCUSED"
export const RCV_EVENTS = "calendar/RCV::EVENTS"
export const RCV_MODAL = "calendar/RCV::MODAL"
export const ASK_EVENTS = "calendar/ASK::EVENTS"
export const ADD_EVENTS = "calendar/ADD::EVENTS"

export const rcvView = (view) => ({
  type: RCV_VIEW,
  payload: view
})

export const rcvDay = (day) => ({
  type: RCV_DAY,
  payload: day
})

export const rcvWeek = (week) => ({
  type: RCV_WEEK,
  payload: week
})

export const rcvFocused = (focused) => ({
  type: RCV_FOCUSED,
  payload: focused
})

export const rcvEvents = (events) => ({
  type: RCV_EVENTS,
  payload: events
})

export const rcvModal = (modal) => ({
  type: RCV_MODAL,
  payload: modal
})

export const askEvents = (params) => ({
  type: ASK_EVENTS,
  payload: params
})

export const addEvents = (events) => ({
  type: ADD_EVENTS,
  payload: events
})

/**
 * RESOURCES
 */
export const RCV_RESOURCES = "calendar/RCV::RESOURCES"
export const ASK_SEARCH = "calendar/ASK::SEARCH"
export const ASK_RESOURCES = "calendar/ASK::RESOURCES"

export const rcvResources = (resources) => ({
  type: RCV_RESOURCES,
  payload: resources
})

export const askResources = () => ({
  type: ASK_RESOURCES
})

export const askSearch = (search) => ({
  type: ASK_SEARCH,
  payload: search
})
