/**
 * Created with webstorm
 * User: yanghui
 * Date: 2019-04-08
 * Time: 14:28
 *
 */
import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const ArticleSchema = new Schema({
  usr_id:{
    type:String,
    required:"usr_id required"
  },
  title: {
    type: String,
    required: "title required"
  },
  content: {
    type: String,
    required: "content required"
  }
});

export const ArticleModel = mongoose.model("articles",ArticleSchema);

