/**
 * Created with webstorm
 * User: yanghui
 * Date: 2019-03-29
 * Time: 11:03
 *
 */

import * as mongoose from 'mongoose'

import {Request, Response} from 'express'
import {UsrSchema} from '../models/usrModel'
import {dtoUtil} from '../dtoResponse/dto'

/*引入uuid*/
const UsrModel = mongoose.model('usr', UsrSchema);

export class LoginController {
  public login(req: Request, res: Response) {
    if (req.body.name) {
      UsrModel.find({name: req.body.name}, (err, usr) => {
        if (err) {
          res.json(dtoUtil().falseDto('查询用户出错！'))
        } else {
          if (usr.length !== 1) {
            res.json(dtoUtil().falseDto('用户不存在'))
          } else {
            req.session.name = req.body.name;
            req.session.usr_id = usr[0]._id;
            res.json(dtoUtil().successDto(usr[0]))
          }
        }
      })
    }
  }
}
