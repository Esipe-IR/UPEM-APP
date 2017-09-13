export const RCV_RESOURCES = "calendar/resources/RCV::RESOURCES";
export const RCV_MATCHES = "calendar/resources/RCV::MATCHES";
export const RCV_MAX_ITEMS = "calendar/resources/RCV::MAX_ITEMS";

export const ASK_RESOURCES = "calendar/resources/ASK::RESOURCES";
export const ASK_SEARCH = "calendar/resources/ASK::SEARCH";

export const rcvResources = resources => ({
  type: RCV_RESOURCES,
  payload: resources
});

export const rcvMatches = matches => ({
  type: RCV_MATCHES,
  payload: matches
});

export const rcvMaxItems = maxItems => ({
  type: RCV_MAX_ITEMS,
  payload: maxItems
});

export const askResources = () => ({
  type: ASK_RESOURCES
});

export const askSearch = (value) => ({
  type: ASK_SEARCH,
  payload: value
});
