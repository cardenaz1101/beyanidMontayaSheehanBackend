import { Router } from "express";

import { router as usersRouter } from "./users/users_routes";
import { router as documentTypesRouter } from "./document_types/document_types_routes";
import { validate } from "../middleware/validateToken";

const router = Router();

router.use('/users', usersRouter);
router.use('/documentTypes', validate, documentTypesRouter);

export { router }

