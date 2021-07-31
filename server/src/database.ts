import "reflect-metadata";
import { createConnection } from "typeorm";

export const handleConnection = async () => {
  await createConnection()
    .then(async (connection) => {
      console.log("DB connection successful");
    })
    .catch((error) => console.log(error));
};
