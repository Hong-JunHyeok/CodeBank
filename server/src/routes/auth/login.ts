import { Request, Response, NextFunction } from "express";
import { User } from "../../entity/User";
import jwt from "../../utils/jwt";

export default async (req: Request, res: Response, next: NextFunction) => {
  const { id, password } = req.body;

  if (!id || !password) {
    return res.json({
      message: "아이디와 비밀번호가 누락되었습니다.",
    });
  }

  try {
    const existUser = await User.findOne({
      where: {
        id,
        password,
      },
    });

    if (!existUser) {
      return res.json({
        message: "회원 정보가 없습니다.",
      });
    }

    const accessToken = jwt.sign(existUser);
    const refreshToken = jwt.refresh();

    return res.json({
      message: "로그인에 성공했습니다.",
      data: {
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
