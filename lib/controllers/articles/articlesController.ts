/**
 * Created with webstorm
 * User: yanghui
 * Date: 2019-04-11
 * Time: 13:28
 *
 */
import {Request, Response} from "express";
import {ArticleModel} from '../../models/articles/articleModel'
import {dtoUtil} from '../../dtoResponse/dto'


export class ArticlesController {
  public addArticle(req: Request, res: Response) {
    let params = {
      title: req.body.input_title,
      content: req.body.input_content
    };
    Object.assign(params, {"usr_id": req.session.usr_id});
    const articleModel = new ArticleModel(params);
    articleModel.save((err, article) => {
      if (err) {
        res.json(dtoUtil().falseDto(err))
      }
      res.json(dtoUtil().successDto("提交成功"))
    })
  }

  public queryArticle(req: Request, res: Response) {
    ArticleModel.find({usr_id: req.session.usr_id}, (err, articles) => {
      err
        ? res.json(dtoUtil().falseDto("查询articles失败"))
        : res.json(dtoUtil().successDto(articles))
    })
  }
}
