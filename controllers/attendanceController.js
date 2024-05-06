const query=require('../dbQuery/queries')

exports.homeGet = (req,res,next)=>{
    query.createTable()
    .then(result=>{
        res.json(result);
    })
    .catch(err=>console.log(err))
}

exports.getDate = (req,res,next)=>{
    query.getDate(req.params.date)
    .then(result=>{
        res.json(result);
    })
    .catch(err=>console.log(err))
    
}

exports.getStudent=(req,res,next)=>{
    query.getStudent()
    .then(result=>{
        res.json(result);
    })
    .catch(err=>console.log(err))
}

exports.postAttendance=(req,res,next)=>{

 query.storeRecord(req.body.data,req.body.date)
    .then(result=>{
        if(result=='Success'){
      
            res.json('Success')
        }
        else{
            res.json("Error")
        }
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.getReport=(req,res,next)=>{
    query.getReport()
    .then(result=>{
        res.json(result)

    })
    .catch(err=>console.log(err));
}