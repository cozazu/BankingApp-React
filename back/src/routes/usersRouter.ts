import {Router} from "express";
import { getAllUSers, getUserById, register, login } from "../controllers/usersController";

const usersRouter = Router();

usersRouter.get("/", getAllUSers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/register", register);
usersRouter.post("/login", login);

export default usersRouter;