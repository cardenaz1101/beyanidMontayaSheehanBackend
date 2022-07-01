import { Router } from "express";

import { UsersController } from "../../contollers/users/user_constroller";

const controller = new UsersController();

const router = Router();

router.post('/login', controller.login);
router.post('/signup', controller.signUp);

export { router }