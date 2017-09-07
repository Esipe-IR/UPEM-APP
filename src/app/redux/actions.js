export const RCV_TOKEN = "app/RCV::TOKEN";
export const RCV_USER = "app/RCV::USER";
export const RCV_TOGGLE_NAV = "app/RCV::TOGGLE::NAV";
export const RCV_PROJECT = "app/RCV::PROJECT";
export const ASK_USER = "app/ASK::USER";
export const ASK_PROJECT = "app/ASK::PROJECT";

export const rcvToken = token => ({
  type: RCV_TOKEN,
  payload: token,
  error: null
});

export const rcvUser = user => ({
  type: RCV_USER,
  payload: user
});

export const rcvToggleNav = toggle => ({
  type: RCV_TOGGLE_NAV,
  payload: toggle
});

export const rcvProject = project => ({
  type: RCV_PROJECT,
  payload: project
});

export const askUser = () => ({
  type: ASK_USER
});

export const askProject = () => ({
  type: ASK_PROJECT
});
