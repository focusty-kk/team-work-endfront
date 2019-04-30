import * as express from "express";
import * as bodyParser from "body-parser";
import {Routes} from "./routes/crmRoutes";
import * as mongoose from "mongoose";
import {apiFilter} from "./apiFilter/apiFilter";

const morgan = require("morgan");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost:27017/myblog';

    /**
     * 1.获取express实例
     * 2.启用中间件，bodyparser,urlencode,static静态目录
     * 3. 注入路由
     * 4. mongo 数据库连接
     * 5.解析cookie
     * 6.
     * 7.过滤器
     */
    constructor() {
        this.app = express();
        this.cors();
        this.config();
        this.mongoSetup();
        this.parserCookie();
        this.apiFilterParser();
        this.sessioncfg();
        this.routePrv.routes(this.app);
        this.logConfig();
    }

    private cors(): void {
        this.app.all('*', function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            res.header('Access-Control-Allow-Methods', '*');
            res.header('Content-Type', 'application/json;charset=utf-8');
            next();
        });
    }

    /**
     * 日志内容配置
     */
    private logConfig(){
        this.app.use(morgan('short'))
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        // serving static files
        this.app.use(express.static('public'));
    }
    private parserCookie():void{
        this.app.use(cookieParser('sessions'))
    }
    private apiFilterParser(){
        this.app.use(apiFilter)
    }
    // todo session包
    private sessioncfg(): void {
        this.app.use(session({
            secret: 'sessions', //加密字符串也可以写数组
            resave: false,     //强制保存session 建议设置成false
            saveUninitialized: true,  //强制保存未初始化的内容
            rolling: true, //动态刷新页面cookie存放时间
            name: 'sessions',
            cookie: {maxAge: 900000}, //保存时效
            store: new MongoStore({
                mongooseConnection: mongoose.connection,
                collection : 'sessions'
            })
        }))
    }

    private mongoSetup(): void {
        // mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

}

export default new App().app;
