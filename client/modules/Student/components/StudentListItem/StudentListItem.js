import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

function StudentListItem(props, context) {
  return (
    <div>
      <p>{props.student.sid}</p>
      <p>{props.student.email}</p>
      <p><a href="#" onClick={props.onDelete}><FormattedMessage id="deleteStudent" /></a></p>
      <hr/>
    </div>
  );
}

StudentListItem.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sid: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default StudentListItem;
