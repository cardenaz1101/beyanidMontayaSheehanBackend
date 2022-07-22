import axios from "axios";

const build = () => {
  const execute = async (token: string) => {
    try {
      const accessToken = await getPaypalToken();

      const response = await axios.post(
        `${process.env.PAYPAL_API}/v2/checkout/orders/${token}/capture`,
        {},
        accessToken
      );
      return response;
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
