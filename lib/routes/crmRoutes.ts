import {Request, Response} from "express";
import {fileUpload} from "../service/fileService";
import * as logger from "../logger";
export class Routes {
  public routes(app): void {
    app.route("/").get((req:Request, res: Response) => {
      res.status(200).send({
        message: "GET request successful"
      })
    });
    app.route("/file").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successful"
      });
    }).post((req: Request, res: Response) => {
      try {
        logger.info(JSON.stringify(req.files));
        const files: Express.Multer.File[] = req.files as Express.Multer.File[];
        fileUpload(files);
        return res.status(200).send({
          message: "Post request successful"
        })
      } catch (err) {
        return res.status(500).send({
          message: err.toString()
        })
      }
    })
  }
}