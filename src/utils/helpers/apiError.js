export default class ApiError extends Error {
  /* istanbul ignore next */
  constructor(status = false, ...params) {
    super(...params);

    this.status = status;
    this.date = new Date();
  }
}
