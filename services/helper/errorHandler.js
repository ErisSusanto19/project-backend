const funcErrorHandler = (err, req, res, next) => {
  console.log(err);
  let code = 500;
  let message = "Internal server error";

  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    code = 404;
    message = err.errors[0].message;
  }

  if (err.name === "not_found") {
    code = 404;
    message = "Data not found";
  }

  if (err.name === "empty_email") {
    code = 400;
    message = "email field cannot be empty";
  }

  if (err.name === "empty_password") {
    code = 400;
    message = "password field cannot be empty";
  }

  if (err.name === "wrong_email_password") {
    code = 401;
    message = "Wrong email or password";
  }

  if (err.name === "email_edit_fail") {
    code = 400;
    message = "Email is taken already";
  }

  res.status(code).json({ message });
};

module.exports = { funcErrorHandler };
