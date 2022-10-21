import { NextFunction, response, Response } from "express";
import paymentGateways from "../../use_cases/payment_gateways/index";

export class PaymentGatewaysController {
  async createPayment(
    req: any,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const {
        params: { documentTypesId },
      } = req;
      const result = await paymentGateways.createPayment(documentTypesId);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async capturePayment(
    req: any,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const {
        params: { token , documentTypesId},
        user: { id }
      } = req;
      
      const result = await paymentGateways.capturePayment(token, id, documentTypesId);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
