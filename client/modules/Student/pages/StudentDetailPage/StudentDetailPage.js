import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
//import styles from '../../components/StudentListItem/StudentListItem.css';

// Import Actions
import { fetchStudent } from '../../StudentActions';

// Import Selectors
import { getStudent } from '../../StudentReducer';

export function StudentDetailPage(props) {
  return (
    <div>
      <p>{props.student.sid}</p>
      <p><FormattedMessage id="by" /> {props.student.name}</p>
      <p>{props.student.email}</p>
    </div>
  );
}

// Actions required to provide data for this component to render in sever side.
StudentDetailPage.need = [params => {
  return fetchStudent(params.sid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    student: getStudent(state, props.params.sid),
  };
}

StudentDetailPage.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sid: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(StudentDetailPage);
