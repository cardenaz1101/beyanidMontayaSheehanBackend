import { User } from "../../entities/User";
import { InternalServerError } from "http-errors";
import crypto from "crypto";
import jwt from "jsonwebtoken";
const ENCODING = "hex";
const ALGORITHM = "sha256";

const build = () => {
  const execute = async (email: string, password: string) => {
    try {
      const user = await getUserByLogin(email);
      const passwordCorrect = user === null ? false : validatePwd(password, user.password_salt, user.password);
      if (!(user && passwordCorrect)) {
        throw new InternalServerError("Invalid email or password");
      }

      const userForToken = {
        id: user.id,
        email: user.email,
      };

      const token = jwt.sign(
        userForToken,
        process.env.JWT_SECRET,
        {
          expiresIn : "1d"
        }
      );

      return token;
    } catch (error) {
      throw error;
    }
  };

  const getUserByLogin = async (email: string) => {
    try {
      const user = await User.findOneBy({ email });
      return user;
    } catch (err) {
      throw err;
    }
  };

  const validatePwd = (
    password: string,
    password_salt: string,
    hashed: string
  ) => {
    const toVerify = crypto
      .createHmac(ALGORITHM, password_salt)
      .update(password)
      .digest(ENCODING);
    return hashed === toVerify;
  };

  return execute;
};

export { build };
