import {Request, Response, NextFunction} from "express";
import {ContactController} from "../controllers/crmController";
import {PhoneController} from "../controllers/phoneController"
import {UsrController} from "../controllers/usrController"
import {LoginController} from "../controllers/loginController"
import {ArticlesController} from "../controllers/articles/articlesController"
// 测试专用
import {TestController} from "../controllers/testController"
export class Routes {

  public contactController: ContactController = new ContactController();
  public phoneController: PhoneController = new PhoneController();
  public usrController: UsrController = new UsrController();
  public loginController: LoginController = new LoginController();
  public articleController: ArticlesController = new ArticlesController();

  public testController:TestController = new TestController()

  public routes(app): void {

    app.route('/')
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: 'GET request successfulll!!!!'
        })
      });

    // Contact
    app.route('/contact')
      .get((req: Request, res: Response, next: NextFunction) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
          res.status(401).send('You shall not pass!');
        } else {
          next();
        }
      }, this.contactController.getContacts)

      // POST endpoint
      .post(this.contactController.addNewContact);

    // Contact detail
    app.route('/contact/:contactId')
    // get specific contact
      .get(this.contactController.getContactWithID)
      .put(this.contactController.updateContact)
      .delete(this.contactController.deleteContact);

    // phone
    app.route('/phone')
      .post(this.phoneController.addNewPhone)
      .get(this.phoneController.getAllPhones)
      .put(this.phoneController.updatePhone)
      .delete(this.phoneController.deletePhone);

    // 用户登录
    app.route('/api/login')
      .post(this.loginController.login);

    // usr 用户注册
    app.route('/api/register')
      .post(this.usrController.addUsr)

    // 添加文章
    app.route('/api/article')
      .post(this.articleController.addArticle)
      .get(this.articleController.queryArticle)


    /**
     * 测试专用
     */
    app.route('/dzgzpt-wsys/api/zbtj/list')
      .post(this.testController.queryTest)
      .put(this.testController.addTest)
  }
}
