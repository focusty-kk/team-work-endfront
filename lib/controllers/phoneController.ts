import * as mongoose from 'mongoose'
import {PhoneSchema} from '../models/phoneModel'
import {Request, Response} from 'express'

//  创建一个collection phone
const Phone = mongoose.model('Phone', PhoneSchema)

export class PhoneController {
    /**
     * 增加
     * @param req
     * @param res
     */
    public addNewPhone(req: Request, res: Response) {
        console.log(req.body)
        let newPhone = new Phone(req.body)
        newPhone.save((err, phone) => {
            if (err) {
                res.send(err)
            }
            res.json(phone)
        })
    }

    /**
     * 查询
     * @param req
     * @param res
     */
    public getAllPhones(req: Request, res: Response) {
        Phone.find((err, phones) => {
            if (err) {
                res.send(err)
            }
            res.json(phones)
        })
    }

    /*删除*/
    public deletePhone(req: Request, res: Response) {
        Phone.remove({_id: req.body._id}, (parameters: { err: any, phone: any }) => {
            let {err, phone} = parameters;
            console.log('delete phone')
            if (err) {
                res.send(err)
            }
            res.json({message: '删除成功！'})
        })
    }

    public updatePhone(req: Request, res: Response) {
        Phone.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, phone) => {
            console.log(req.body)
            if (err) {
                res.send(err)
            }
            res.json(phone)
        })
    }
}
