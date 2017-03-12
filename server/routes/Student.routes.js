import { Router } from 'express';
import * as StudentController from '../controllers/Student.controller';

const router = new Router();


//get all students
router.route('/students').get(StudentController.getStudents);

//get one students by student id (sid)
router.route('/students/:sid').get(StudentController.getStudent);

//add a new student
router.route('/students/').post(StudentController.addStudent);

//update one student

//delete a student by sid
router.route('/students/:sid').delete(StudentController.deleteStudent);


export default router;
