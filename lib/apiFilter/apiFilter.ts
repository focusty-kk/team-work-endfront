/**
 * Created with webstorm
 * User: yanghui
 * Date: 2019-04-08
 * Time: 09:34
 *
 */

import {Request, Response, NextFunction} from 'express'
import {SessionModel} from '../models/sessionModel'
import {dtoUtil} from "../dtoResponse/dto";

/**
 * 1，如果sessions中存在 并且与cookie匹配
 * @param req
 * @param res
 * @param next
 */
export const apiFilter = (req: Request, res: Response, next: NextFunction) => {
  const cookieStr = req.signedCookies.sessions;
  const url = req.originalUrl;
  if (url === '/api/register' || url === '/api/login'||url === '/dzgzpt-wsys/api/zbtj/list') {
    next()
  } else {
    SessionModel.findById(cookieStr, (err, session) => {
      if (err) {
        res.json(dtoUtil().falseDto("查询失败"))
      }
      /*session存在的*/
      if (!!session && JSON.parse((<any>session).session).name) {
        next()
      } else {
        res.json(dtoUtil().falseDto("登录超时，请重新登录"))
        // res.redirect('http://localhost:8080/pages/loginPage')
      }
    })
  }
};
