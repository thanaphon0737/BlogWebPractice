import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded( {extended: true}))
app.use(express.static('public'))
const year =(new Date().getFullYear());
let postArray = [];
app.get('/',(req,res) => {
    res.render('index.ejs',{year:year});
})
app.get('/about',(req,res) => {
    res.render('about.ejs',{year:year});
})
app.get('/contact',(req,res) => {
    res.render('contact.ejs',{year:year});
})
app.get('/post',(req,res) => {
    res.render('post.ejs',{
        year:year,
        textArray:postArray
    });
})

function editPost() {
    console.log('Click Edit!!!')
}
app.post('/submit_post',(req,res) => {
    
    let text = req.body['text'];
    console.log(text)
    if(text){
        postArray.push(text)
    }
    console.log(postArray)
    res.render('post.ejs',{
        year:year,
        textArray:postArray
    });
})
app.listen(port,()=>{
    console.log(`App running in ...${port}`);
})