import * as mongoose from 'mongoose';
import {ContactSchema} from '../models/crmModel';
import {Request, Response} from 'express';

const Contact = mongoose.model('Contact', ContactSchema);

export class ContactController {
  // 增加
  public addNewContact(req: Request, res: Response) {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  // 查询所有
  public getContacts(req: Request, res: Response) {
    Contact.find({}, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  // 查询单条
  public getContactWithID(req: Request, res: Response) {
    Contact.findById(req.params.contactId, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  // 更新
  public updateContact(req: Request, res: Response) {
    Contact.findOneAndUpdate(
      {_id: req.params.contactId}, req.body,
      {new: true},
      (err, contact) => {
        if (err) {
          res.send(err);
        }
        res.json(contact);
      });
  }

  // 删除
  public deleteContact(req: Request, res: Response) {
    Contact.remove(
      {_id: req.params.contactId},
      (parameters: { err: any, contact: any }) => {
        let {err, contact} = parameters;
        if (err) {
          res.send(err);
        }
        res.json({message: 'Successfully deleted contact!'});
      });
  }

}
