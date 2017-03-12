import React, { PropTypes } from 'react';

// Import Components
import StudentListItem from '../components/StudentListItem/StudentListItem';

function StudentList(props) {
  console.log(props);
  return (
    <div className="listView">
      {
        props.students.map(student => (
          <StudentListItem
            student={student}
            key={student.sid}
            onDelete={() => props.handleDeleteStudent(student.sid)}
          />
        ))
      }
    </div>
  );
}

StudentList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    sid: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteStudent: PropTypes.func.isRequired,
};

export default StudentList;
