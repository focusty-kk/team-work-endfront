/**
 * Created with webstorm
 * User: yanghui
 * Date: 2019-04-17
 * Time: 14:27
 *
 */
import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;
/*{
  "swjgmc": "税务机关名称",
  "rn": "排名",
  "dyhsb": "多元化",
  "dtsb": "大厅",
  "dyhsbbl": "多元化申报比例（%）",
  "sbl": "申报率",
  "jhjd": "均衡申报进度差异（%）",
  "dyhdj": "多元化",
  "dtdj": "大厅",
  "djsbl": "多元化比例（%）",
  "dyhfp": "多元化",
  "dtfp": "大厅",
  "fpsbl": "多元化比例（%）",
  "dyhyh": "多元化",
  "dtyh": "大厅",
  "yhsbl": "多元化比例（%）",
  "dyhqt": "多元化",
  "dtqt": "大厅",
  "qtsbl": "多元化比例（%）",
  "dyhhj": "多元化",
  "dthj": "大厅",
  "dyhzb": "多元化业务量占比（%）"
}*/
export const TestSchema = new Schema({
  swjgmc:{
    type:String
  },
  rn: {
    type: String
  },
  dyhsb: {
    type: String
  },
  dtsb:{
    type: String
  },
  dyhsbbl:{
    type:String
  },
  sbl: {
    type: String
  },
  jhjd: {
    type: String
  },
  dyhdj:{
    type:String
  },
  dtdj: {
    type: String
  },
  djsbl: {
    type: String
  },
  dyhfp:{
    type:String
  },
  dtfp: {
    type: String
  },
  fpsbl: {
    type: String
  },
  dyhyh: {
    type: String
  },
  dtyh: {
    type: String
  },
  yhsbl:{
    type:String
  },
  dyhqt: {
    type: String
  },
  dtqt: {
    type: String
  },
  qtsbl: {
    type: String
  },
  dyhhj: {
    type: String
  },
  dthj:{
    type:String
  },
  dyhzb: {
    type: String
  }
});

export const TestModel = mongoose.model("ywltjs",TestSchema);
