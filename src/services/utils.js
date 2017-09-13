export const newState = (state, action, x) => {
  return Object.assign({}, state, {
    [x]: action.payload
  });
};

export const addState = (state, action, x) => {
  let o = Object.assign({}, state[x], {});
  let keys = Object.keys(action.payload);

  keys.forEach(k => {
    o[k] = action.payload[k];
  });

  return Object.assign({}, state, { [x]: o });
};
