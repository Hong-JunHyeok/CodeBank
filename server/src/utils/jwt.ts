import jwt from "jsonwebtoken";
import { User } from "../entity/User";

const jwtModule = {
  sign: (user: User) => {
    // access token 발급
    const payload = {
      id: user.id,
      name: user.name,
    };

    return jwt.sign(payload, process.env.JWT_SECRET);
  },
  refresh: () => {
    // refresh token 발급
    return jwt.sign({}, process.env.JWT_SECRET, {
      algorithm: "HS256",
      expiresIn: "14d",
    });
  },
};

export default jwtModule;
