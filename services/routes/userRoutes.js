const {
  UserController,
  UserAuthenticationController,
} = require("../controller/user");

const userRouter = require("express").Router();

userRouter.get("/", UserController.getAllUsers);
userRouter.get("/:id", UserController.getUserById);
userRouter.post("/login", UserAuthenticationController.userLogin);
userRouter.post("/register", UserAuthenticationController.userRegister);
userRouter.put("/:id", UserController.userEditProfile);

userRouter.patch("/:id", UserController.userIsBannedStatus);

module.exports = userRouter;
