export const RCV_VIEW = "calendar/events/RCV::VIEW";
export const RCV_DAY = "calendar/events/RCV::DAY";
export const RCV_WEEK = "calendar/events/RCV::WEEK";
export const RCV_FOCUSED = "calendar/events/RCV::FOCUSED";
export const RCV_MODAL = "calendar/events/RCV::MODAL";
export const RCV_RESOURCE = "calendar/events/RCV::RESOURCE";
export const ASK_RESOURCE = "calendar/events/ASK::RESOURCE";

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

export const rcvModal = modal => ({
  type: RCV_MODAL,
  payload: modal
});

export const rcvResource = resource => ({
  type: RCV_RESOURCE,
  payload: resource
});

export const askResource = params => ({
  type: ASK_RESOURCE,
  payload: params
});
