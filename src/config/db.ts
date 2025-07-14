import fs from "fs";

export const readDB = () => {
  return JSON.parse(fs.readFileSync("./db.json").toString());
};

export const writeDB = (data: any) => {
  return fs.writeFileSync("./db.json", JSON.stringify(data, null, 4));
};
