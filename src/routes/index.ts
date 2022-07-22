import { Router } from "express";

import { router as usersRouter } from "./users/users_routes";
import { router as documentTypesRouter } from "./document_types/document_types_routes";
import { router as paymentGatewaysRouter } from "./payment_gateways/payment_gateways_routes";
import { validate } from "../middleware/validateToken";

const router = Router();

router.use('/users', usersRouter);
router.use('/documentTypes', validate, documentTypesRouter);
router.use('/paymentGateways', validate, paymentGatewaysRouter)

export { router }

