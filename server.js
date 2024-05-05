const express=require('express');
const app=express();
const path=require('path')
const homeRouter= require('./routes/home');
const bodyParser=require('body-parser');
const cors=require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'views')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use('/',homeRouter);

const PORT=5000;
app.listen(PORT,()=>{
    console.log("Listening On Port "+PORT);
});