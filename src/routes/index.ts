import { Router } from "express";

import { router as usersRouter } from "./users_svc/users_routes";

const router = Router();

router.use('/users', usersRouter);

export { router }

