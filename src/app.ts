import * as path from "path";

let express = require('express')
let app = express();
const port = process.env.PORT || 80;

let folder = path.join(__dirname, '../allure-report')

app.use(express.static(folder));
app.listen(port);