export const request = (constant, payload) => ({
  type: constant,
  payload,
});

export const reject = (err, constant) => ({
  type: constant,
  payload: err,
});

export const success = (res, constant) => ({
  type: constant,
  payload: res,
});
