const express = require('express')
const app = express()

const expressEjsLayouts = require('express-ejs-layouts')
const router = require('./router')


app.use(express.static("public"))
app.set("views", "views")
app.set("view engine", "ejs")
app.use(expressEjsLayouts)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', router)


app.listen(process.env.APP_PORT , () => {
    console.log(`Example app listening at http://localhost:${process.env.APP_PORT}`)
})