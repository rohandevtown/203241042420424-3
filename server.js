const express = require("express");

// initatilsation
const app = express();

app.use(express.json());

const port = 8081;

const toDoList = ["rohan", "rohit", "anil", "anup"];

// http://localhost:8081/todos
app.get("/todos", (req, res)=>{
    res.status(200).send(toDoList);
})

app.post("/todos", (req, res)=>{
    let newToDoItem = req.body.item;
    toDoList.push(newToDoItem);
    res.status(201).send({
        message: "Task was added succesfully!"
    })
})

app.delete("/todos", (req, res)=>{
    const itemToDelete = req.body.item;

    toDoList.find((elem, i) => {
        if(elem == itemToDelete){
            toDoList.splice(i, 1)
        }
    })
    res.status(204).send({
        message: "Deleted the item"
    })
})

app.all("/todos", (req, res)=>{
    res.status(501).send()
})


app.all("*",(req, res)=>{
    res.status(404).send();
})


app.listen(port, () => {
    console.log(`ExpressJs Server is up and running succesfully on port ${port}`)
})