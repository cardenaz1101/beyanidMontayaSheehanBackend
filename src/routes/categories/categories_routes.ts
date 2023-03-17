import { Router } from "express";

import { CategoriesController } from "../../contollers/categories/categories_controller";

const controller = new CategoriesController();

const router = Router();

router.get('/getAll', controller.get);

export { router }