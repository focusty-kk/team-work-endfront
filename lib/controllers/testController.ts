/**
 * Created with webstorm
 * User: yanghui
 * Date: 2019-04-17
 * Time: 14:36
 *
 */
import {Request, Response} from "express";
import {TestModel} from '../models/testModel'
import {dtoUtil} from '../dtoResponse/dto'


export class TestController {
  public addTest(req: Request, res: Response) {
    let params = {
      "swjgmc": "税务机关名称",
      "rn": "12",
      "dyhsb": "1",
      "dtsb": "大厅",
      "dyhsbbl": "12",
      "sbl": "99.8",
      "jhjd": "35.5",
      "dyhdj": "12",
      "dtdj": "23",
      "djsbl": "34",
      "dyhfp": "34",
      "dtfp": "23",
      "fpsbl": "34",
      "dyhyh": "23",
      "dtyh": "444",
      "yhsbl": "23",
      "dyhqt": "344",
      "dtqt": "455",
      "qtsbl": "344",
      "dyhhj": "45",
      "dthj": "55",
      "dyhzb": "344"
    };
    const testModel = new TestModel(params);
    testModel.save((err, article) => {
      console.log(article)
      if (err) {
        res.json(dtoUtil().falseDto(err))
      }
      res.json(dtoUtil().successDto("提交成功"))
    })
  }

  public queryTest(req: Request, res: Response) {
    TestModel.find({}, (err, tests) => {
      console.log(tests)
      err
        ? res.json(dtoUtil().falseDto("查询tests失败"))
        : res.json(dtoUtil().successDto(tests))
    })
  }
}
