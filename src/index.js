import app from "./server.js"
import bodyParser from "body-parser"

const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})