/**
 * Created with webstorm
 * User: yanghui
 * Date: 2019-03-29
 * Time: 10:43
 *
 */

import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

export const SessionSchema = new Schema({
  _id: String,
  session: {
    type: String
  }
});

export const SessionModel = mongoose.model('sessions', SessionSchema);
