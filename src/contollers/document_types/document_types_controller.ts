import { NextFunction, Request, Response } from "express";
import documentTypes from "../../use_cases/document_types/index";

export class DocumentTypesController {
  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await documentTypes.getAll();
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async getOneById(req: any, res: Response, next: NextFunction): Promise<void> {
    try {
      const {
        params: { id },
        user: { id: userId },
        query: { sortOrderType }
      } = req;

      const result = await documentTypes.getOneById(id, userId, sortOrderType);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
