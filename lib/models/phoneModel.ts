import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

export const PhoneSchema = new Schema({
    width: {
        type: Number,
        required: 'Enter width'
    },
    height: {
        type: Number,
        required: 'Enter height'
    },
    price: {
        type: Number
    }
})
