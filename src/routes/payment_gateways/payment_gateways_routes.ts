import { Router } from "express";
import { PaymentGatewaysController } from "../../contollers/payment_gateways/payment_gateways_controller";

const controller = new PaymentGatewaysController();

const router = Router();

router.get('/createPayment/:documentTypesId', controller.createPayment)
router.get('/capturePayment/:token/:documentTypesId', controller.capturePayment)

export { router }