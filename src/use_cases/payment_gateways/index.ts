import { build as buildCreatePayment } from "./create_payment";
import { build as buildCapturePayment } from "./capture_payment";

const createPayment = buildCreatePayment();
const capturePayment = buildCapturePayment();

const service = {
    createPayment,
    capturePayment
}
export default service;
export {
    createPayment,
    capturePayment
}