const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const SortMiddleware = require('./app/middlewares/SortMiddleware');

const db = require('./config/db');

//connect to db
db.connect();

const app = express();

const port = 3000;
const route = require('./routes'); //co the viet them /index, nhung do file index nen no tu hieu
app.use(express.static(path.join(__dirname, 'public'))); //xu ly duong dan cac file tinh nam trong public
// "watch": "node-sass --watch src/resources/scss/app.scss src/public/css/app.css",
//HTTP Logger
// app.use(morgan('combined')); //dung de xem chi tiet request
app.use(
    express.urlencoded({
        extended: true, //them option cua no chu khong gi
    }),
); //= app.use(bodyParser.urlencoded());
app.use(express.json());
// override with POST having ?_method=DELETE
app.use(methodOverride('_method')); //override phuong thuc ngoai get va post

//Custom Middleware
app.use(SortMiddleware);
//XMLHttpRequest, fetch, axios, v..v.. thì đều được sd để gửi dữ liệu lên sv ngoài submit của form. nên phải khai báo thư viện như json để xử lý
// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs', //cau hinh thay doi cham duoi handlebars
        helpers: { //dang custom function
            sum: (a, b) => a + b, //muc dich la hien thi so thu tu
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';


                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending',
                };

                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };

                const icon = icons[sort.type];
                const type = types[sort.type];


                return ` <a href="?_sort&column=${field}&type=${type}"><span class="${icon}"></span></a>`;
            }
        }
    }),
); //dinh nghia handlebars

app.set('view engine', 'hbs'); //set handlebars

app.set('views', path.join(__dirname, 'resources', 'views')); //handlebars de lam layout. ghi '' cách dấu phẩy thì tự động nó biết mà thêm / hay \\ cho hệ điều hành, cho thiết bị mình chạy
//route init
route(app);

app.listen(port, () => {
    console.log(`LISTENING ON PORT http://localhost:${port}`);
});