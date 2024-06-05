const http = require("http");

const port = 8081;

http.createServer((req, res)=> {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Hello rohan kinnal 12345678910!</h1>");
    res.end();
})
.listen(port, () => {
    console.log(`NodeJs Server is up and running succesfully on port ${port}`)
})

// http://localhost:8081/