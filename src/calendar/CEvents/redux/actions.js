export const RCV_VIEW = "calendar/events/RCV::VIEW";
export const RCV_DAY = "calendar/events/RCV::DAY";
export const RCV_WEEK = "calendar/events/RCV::WEEK";
export const RCV_FOCUSED = "calendar/events/RCV::FOCUSED";
export const RCV_EVENTS = "calendar/events/RCV::EVENTS";
export const RCV_MODAL = "calendar/events/RCV::MODAL";

export const ASK_EVENTS = "calendar/events/ASK::EVENTS";
export const ADD_EVENTS = "calendar/events/ADD::EVENTS";

export const rcvView = view => ({
  type: RCV_VIEW,
  payload: view
});

export const rcvDay = day => ({
  type: RCV_DAY,
  payload: day
});

export const rcvWeek = week => ({
  type: RCV_WEEK,
  payload: week
});

export const rcvFocused = focused => ({
  type: RCV_FOCUSED,
  payload: focused
});

export const rcvEvents = events => ({
  type: RCV_EVENTS,
  payload: events
});

export const rcvModal = modal => ({
  type: RCV_MODAL,
  payload: modal
});

export const askEvents = params => ({
  type: ASK_EVENTS,
  payload: params
});

export const addEvents = events => ({
  type: ADD_EVENTS,
  payload: events
});

