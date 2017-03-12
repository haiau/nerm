import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import StudentList from '../../components/StudentList';
import StudentAddWidget from '../../components/StudentAddWidget/StudentAddWidget';

// Import Actions
import { addStudentRequest, fetchStudents, deleteStudentRequest } from '../../StudentActions';
import { toggleAddStudent } from '../../../App/AppActions';

// Import Selectors
import { getShowAddStudent } from '../../../App/AppReducer';
import { getStudents } from '../../StudentReducer';

class StudentListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchStudents()); //from StudentActions
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", this.props.students);
  }

  handleDeleteStudent = student => {
    if (confirm('Do you want to delete this student')) { // eslint-disable-line
      this.props.dispatch(deleteStudentRequest(student));
    }
  };

  handleAddStudent = (name, sid, email) => {
    this.props.dispatch(toggleAddStudent());
    this.props.dispatch(addStudentRequest({ name, sid, email }));
  };

  render() {
    return (
      <div>
        <StudentList handleDeleteStudent={this.handleDeleteStudent} students={this.props.students} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
StudentListPage.need = [() => { return fetchStudents(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddStudent: getShowAddStudent(state),
    students: getStudents(state),
  };
}

StudentListPage.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    sid: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
  showAddStudent: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

StudentListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(StudentListPage);
