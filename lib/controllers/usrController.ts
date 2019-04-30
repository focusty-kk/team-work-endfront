import * as mongoose from 'mongoose'
import {Request, Response} from 'express'
import {UsrSchema} from "../models/usrModel";
import {dtoUtil} from '../dtoResponse/dto'

const Usr = mongoose.model('usr', UsrSchema);

export class UsrController {
  public addUsr(req: Request, res: Response) {
    let newUsr = new Usr(req.body);
    Usr.find({name: req.body.name}, (err, usrs) => {
      if (err) {
        res.json(dtoUtil().falseDto(err))
      } else {
        if (usrs.length > 0) {
          res.json(dtoUtil().falseDto("用户名已注册，请修改！"))
        } else {
          newUsr.save((err, usr) => {
            if (err) {
              res.json(dtoUtil().falseDto(err))
            }
            res.json(dtoUtil().successDto(usr))
          })
        }
      }
    })
  }
}
