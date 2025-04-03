import { handleError } from "../helpers/error.js";

const errorMiddleware = (err, req, res, next) => {
  handleError(err, res);
};

export default errorMiddleware;
