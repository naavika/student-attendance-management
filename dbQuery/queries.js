const db = require('../utils/db');

exports.createTable=async()=>{
    await db.query('drop table if exists dailyattendance');
    await db.query('drop  table if exists users');
    await db.query('create table users(id int primary key auto_increment,name varchar(30))');
    await db.query('create table dailyattendance (day date,id int,present int,foreign key (id) references users(id))');
    await db.query('insert into users values(1,"Nidhi"),(2,"Neha"),(3,"Nikita"),(4,"Ruchi"),(5,"Veena"),(6,"Shivangi"),(7,"Sukriti"),(8,"Shalini"),(9,"Shivani"),(10,"Divya");');
    const result= await db.query('select * from users');
    return result[0];
}

exports.getDate=async (date)=>{
    const response=await db.query(`select * from users join dailyattendance on users.id=dailyattendance.id where day ="${date}"`);
    return response;
   
}

exports.getStudent=async()=>{
    return await db.query(`select * from users`);
}

exports.storeRecord=async(data,date)=>{
    let statement='insert into dailyattendance values'
    const number = await this.getStudent();
    
    
    data.forEach((ele,ind)=>{
        statement+=`("${date}",${ele.split('_')[0]},${ele.split('_')[1]==='true'?1:0})${ind===data.length-1?";":","}`;
    })
    try{
        await db.query(statement);
    }
    catch(err){
        console.log(err);
        return "Error in Db";

    }
    return "Success";
}

exports.getReport=async()=>{
    const response= [];

    const dates= await db.query('select distinct day from dailyattendance');
    
    const days=dates[0].length;
    
   let records=await db.query(`select users.id,name,sum(present) as present from users join dailyattendance on users.id=dailyattendance.id group by users.id order by users.id`);
    records=records[0];
   
    records.forEach(element=>{
        element.days=`${element.present}/${days}`;
        element.percent=parseInt(element.present/days*100);
    })
    
    return records;
}
