// Import Actions
import { ADD_STUDENT, ADD_STUDENTS, DELETE_STUDENT } from './StudentActions';

// Initial State
const initialState = {  data: [] }; //warning: remember to initialize data

const StudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT :
      return {
        data: [action.student, ...state.data],
      };

    case ADD_STUDENTS :
      return {
        data: action.students,
      };

    case DELETE_STUDENT :
      return {
        data: state.data.filter(student => student.cuid !== action.cuid),
      };

    default:
      return state;
  }
};
/* Selectors */

// Get all students
export const getStudents = state => state.students.data;

// Get student by sid
export const getStudent = (state, sid) => state.students.data.filter(student => student.sid === sid)[0];

// Export Reducer
export default StudentReducer;
