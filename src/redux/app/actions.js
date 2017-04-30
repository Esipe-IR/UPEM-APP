export const RCV_TOKEN = "app/RCV::TOKEN"
export const RCV_USER = "app/RCV::USER"
export const ASK_TOKEN = "app/ASK::TOKEN"
export const ASK_USER = "app/ASK::USER"

export const receiveToken = (token) => ({
  type: RCV_TOKEN,
  payload: token,
  error: null
})

export const receiveUser = (user) => ({
  type: RCV_USER,
  payload: user
})

export const askUser = () => ({
  type: ASK_USER
})
