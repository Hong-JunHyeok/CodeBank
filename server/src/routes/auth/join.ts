import { Router, Request, Response, NextFunction } from "express";
import { User } from "../../entity/User";

export default async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, name, id } = req.body;
  try {
    const existUser = await User.findOne({
      where: {
        email,
      },
    });

    if (existUser) {
      return res.status(403).json({
        message: "이미 존재하는 유저입니다.",
      });
    }

    const user = new User();

    user.email = email;
    user.password = password;
    user.id = id;
    user.name = name;

    await user.save().then((result) => {
      console.log(result);
      return res.status(200).json({
        message: "유저 등록에 성공했습니다.",
        user,
      });
    });

    return res.status(401).json({
      message: "회원가입 성공",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
