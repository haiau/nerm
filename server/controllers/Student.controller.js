import Student from '../models/Student';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';


export function getStudents(req, res) {
  Student.find().exec((err, students) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ students });
  });
}


export function getStudent(req, res) {
  Student.findOne({ sid: req.params.sid}).exec((err, student) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ student })
  });
}

export function addStudent(req, res) {
  //catch errors
  if (!req.params.student.name || !req.params.student.sid || !req.params.student.email) {
    res.send(403).end();
  }

  const newStudent = new Student(req.params.student);

  // Let's sanitize inputs (khu trung)
  newStudent.name = sanitizeHtml(newStudent.name);
  newStudent.sid = sanitizeHtml(newStudent.sid);
  newStudent.email = sanitizeHtml(newStudent.email);
  newStudent.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ student: saved });
  });
}

export function updateStudent(req, res) {

}

export function deleteStudent(req, res) {
  Student.findOne({ cuid: req.params.cuid}).exec((err, student) => {
    if (err) {
      res.status(500).send(err);
    }

    student.remove(() => {
      res.status(200).end();
    });
  });
}
