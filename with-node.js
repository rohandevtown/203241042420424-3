const http = require("http");

const port = 8081;

const toDoList = ["rohan", "rohit", "anil", "anup"];

http.createServer((req, res)=> {
    const {method, url} = req;
    // console.log(method, url)

    if(url === "/todos"){
        if(method === "GET"){
            res.writeHead(200);
            res.write(toDoList.toString())
        }
       
        else if(method === "POST"){
            let body = "";
            req.on('error',(err)=>{
                console.error(err)
            }).on('data', (chunk) => {
                body += chunk;
                console.log("chunk: ", chunk);
            }).on('end', () => {
                body = JSON.parse(body)
                console.log("body: ", body);
                let newToDo = toDoList;
                newToDo.push(body.item)
            })
        }
        else{
            res.writeHead(501);
        }
    }else if(url === "/"){

    }

    res.end();
})
.listen(port, () => {
    console.log(`NodeJs Server is up and running succesfully on port ${port}`)
})

// http://localhost:8081/