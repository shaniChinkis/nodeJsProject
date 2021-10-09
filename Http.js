const http = require('http');
const url=require('url');
const querystring=require('querystring');
const login=require('./users')

class myServer extends http.Server{
    constructor()
    {
        super();

    this.on('request', (req, res) =>
    {
        new URL(req.url, `http://${req.headers.host}`)

        var searchParams = new URLSearchParams(req.url);
        //  console.log(searchParams.get("/?userName") );
        //  console.log(searchParams.get("password") );
      var username=searchParams.get("/?userName");
      var password=searchParams.get("password");
       login(username,password).then(user =>
        res.end(JSON.stringify(user))
    ).catch(console.log("didnt found (from http)"))

    });
    this.listen("3016");

}}
var server=new myServer();