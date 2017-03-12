import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_STUDENT = 'ADD_STUDENT';
export const ADD_STUDENTS = 'ADD_STUDENTS';
export const DELETE_STUDENT = 'DELETE_STUDENT';

// Export Actions
export function addStudent(student) {
  return {
    type: ADD_STUDENT,
    student,
  };
}

export function addStudentRequest(student) {
  return (dispatch) => {
    return callApi('students', 'post', {
      student: {
        name: student.name,
        sid: student.sid,
        email: student.email,
      },
    }).then(res => dispatch(addStudent(res.student)));
  };
}

export function addStudents(students) {
  return {
    type: ADD_STUDENTS,
    students,
  };
}

export function fetchStudents() {
  return (dispatch) => {
    return callApi('students').then(res => {
      dispatch(addStudents(res.students));
    });
  };
}

export function fetchStudent(sid) {
  return (dispatch) => {
    return callApi(`students/${sid}`).then(res => {
      dispatch(addStudent(res.student));
    });
  };
}

export function deleteStudent(sid) {
  return {
    type: DELETE_STUDENT,
    sid,
  };
}

export function deleteStudentRequest(sid) {
  return (dispatch) => {
    return callApi(`students/${sid}`, 'delete').then(() => {
      dispatch(deleteStudent(sid));
    });
  };
}
