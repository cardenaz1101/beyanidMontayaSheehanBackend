import { NextFunction, Request, Response } from "express";
import categories from "../../use_cases/categories/index";

export class CategoriesController {
  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
          const result = await categories.getAll();
          res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
