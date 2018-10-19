import * as path from "path";
import {DecodeFileName} from "../util/fileUtil";
import * as fs from "fs-extra";
import * as logger from "../logger";
// import * as Express from "express"
export const fileUpload = async (files: Express.Multer.File[]) => {
  try {
    console.log(files);
    const targetDir = path.join(__dirname, "../../dist/file");
    const fileName = DecodeFileName(files[0].filename);
    await fs.emptyDir(targetDir);
    await fs.copyFile(files[0].path, `${targetDir}\\${fileName}`, (err: NodeJS.ErrnoException) => {
      if (err) throw err;
    })
  } catch(error) {
    logger.error(error);
  }
}