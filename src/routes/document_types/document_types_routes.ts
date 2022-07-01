import { Router } from "express";

import { DocumentTypesController } from "../../contollers/document_types/document_types_controller";

const controller = new DocumentTypesController();

const router = Router();

router.get('/getAll', controller.get);

export { router }