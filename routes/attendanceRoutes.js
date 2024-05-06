const express=require('express');
const router=express.Router();
const attendanceController=require('../controllers/attendanceController')

router.get('/',attendanceController.homeGet);

router.get('/getstudent',attendanceController.getStudent);

router.get('/getreport',attendanceController.getReport);

router.get('/getdate/:date',attendanceController.getDate);

router.post('/postattendance',attendanceController.postAttendance);

module.exports=router;
