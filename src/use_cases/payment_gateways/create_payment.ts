import { DocumentType } from "../../entities/Document_types";
import { NotFound } from "http-errors";
import axios from "axios";

const build = () => {
  const execute = async (documentTypesId: string) => {
    try {
      const documentTypes = await DocumentType.findOneBy({
        id: documentTypesId,
      });

      if (!documentTypes) throw new NotFound("document type does not exist");
      const { price } = documentTypes;

      const orden = {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: price,
            },
            description: "test"
          },
        ],
        application_context: {
          brand_name: "Tu empresa.com",
          landing_page: "NO_PREFERENCE",
          user_action: "PAY_NOW",
          return_url: "http://localhost:8080/paymentProcess",
          cancel_url: "http://localhost:4000/api/cancel-payment",
        },
      };

      const accessToken = await getPaypalToken();
      
      const resultPaypal = await createPayment(accessToken, orden);
      const ulrToReturn = getLinkPaypal(resultPaypal);

      return ulrToReturn;
    } catch (error) {
      throw error;
    }
  };

  const getPaypalToken = async () => {
    try {
      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");
      const {
        data: { access_token },
      } = await axios.post(
        "https://api-m.sandbox.paypal.com/v1/oauth2/token",
        params,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          auth: {
            username: process.env.PAYPAL_CLIENT_ID,
            password: process.env.PAYPAL_SECRET,
          },
        }
      );
      return access_token;
    } catch (error) {
      throw error;
    }
  };

  const createPayment = async (accessToken: string, orden: any) => {
    try {
      return await axios.post(
        `${process.env.PAYPAL_API}/v2/checkout/orders`,
        orden,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (error) {
        throw error
    }
  };

  const getLinkPaypal = (resultPaypal: any) => {
    const {data: {links} } = resultPaypal;
    return links.find((link: any) => link.rel.includes('approve'))
  }

  return execute;
};
export { build };
