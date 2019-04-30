import * as mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const UsrSchema = new Schema({
    name: {
        type: String,
        required: 'name must be string'
    },
    password: {
        type: String,
        required: 'age must be string'
    }
});

