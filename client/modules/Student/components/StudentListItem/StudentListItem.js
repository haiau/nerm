import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

function StudentListItem(props, context) {
  return (
    <div className={styles['single-student']}>
      <h3 className={styles['student-name']}>
        <Link to={`/students/${props.student.slug}-${props.student.cuid}`} >
          {props.student.title}
        </Link>
      </h3>
      <p className={styles['student-sid']}>{props.student.sid}</p>
      <p className={styles['student-email']}>{props.student.email}</p>
      <p className={styles['student-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deleteStudent" /></a></p>
      <hr className={styles.divider} />
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
