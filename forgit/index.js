const app = require('express')();
const PORT = 4001;

app.listen(
    PORT,() =>

    console.log('Server is on ${PORT}')

);

app.get('/getRequest',(req,res)=> {
res.send("this is successful")

}
);

app.post('/getpost',(req,res)=> {
    res.send("this is post")
    
    }
    );