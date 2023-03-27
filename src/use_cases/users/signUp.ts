import { User } from "../../entities/User";
import { InternalServerError } from "http-errors";
import { v4 as uuidv4 } from "uuid";
import { hashPwd } from "../../helpers/password_handler";

const build = () => {
  const execute = async (user: any) => {
    try {
        const {firstName, lastName, email, document, phone, password} = user;

        const users = await User.find();

        const emailFound = users.find(user => user.email === email);
        if (emailFound) throw new InternalServerError("Email already exists");
        const documentFound = users.find(user => user.document == document);
        if (documentFound) throw new InternalServerError("Document already exists");

        const hashes = hashPwd(password);
        const newUser = new User();
        newUser.id = uuidv4();
        newUser.first_name = firstName;
        newUser.last_name = lastName;
        newUser.email = email;
        newUser.document = document;
        newUser.phone = phone;
        newUser.password = hashes.password;
        newUser.password_salt = hashes.password_salt
        await newUser.save();
      return newUser;
    } catch (error) {
      throw error;
    }
  };
  return execute;
};

export { build };
