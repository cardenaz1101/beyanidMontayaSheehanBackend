import { Router } from "express";

import { UsersController } from "../../contollers/users_svc/user_constroller";

const controller = new UsersController();

const router = Router();

router.post('/login', controller.login);

export { router }