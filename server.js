const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static("public"))
server.use(express.urlencoded({extended: true}))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false, /* to render html as data, see about.work */
    nocache: true 
})


server.get("/", function(req, res) {
    return res.render("form.njk")
})

server.post("/", function(req, res) {
    const url_image = req.body.url_image 
    return res.render("prediction.njk", {url_image})
})

server.listen(5000, function(){
    console.log("server is run!")
})