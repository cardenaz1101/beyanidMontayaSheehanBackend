import axios from "axios";
import { User } from "../../entities/User";
import { DocumentType } from "../../entities/Document_types";
import { DocumentTypeUser } from "../../entities/Documents_types_users";
import { v4 as uuidv4 } from "uuid";

const build = () => {
  const execute = async (token: string, userId: string, documentTypesId: string) => {
    try {
      const accessToken = await getPaypalToken();
      
      const { data } = await axios.post(
        `${process.env.PAYPAL_API}/v2/checkout/orders/${token}/capture`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if(data.status == "COMPLETED"){
        const [ userFound, documentTypeFound ] = await Promise.all([
          User.findOneBy({ id: userId }),
          DocumentType.findOneBy({ id: documentTypesId })
        ]);
        const { price } = documentTypeFound;

        const newPurchase = new DocumentTypeUser();
        newPurchase.id = uuidv4();
        newPurchase.users = userFound;
        newPurchase.documentTypes = documentTypeFound;
        newPurchase.url = 'TEST';
        newPurchase.price = price;

        await newPurchase.save();
      }

      return data;
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

  return execute;
};
export { build };
