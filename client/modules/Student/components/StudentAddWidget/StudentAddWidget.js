import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './StudentAddWidget.css';

export class StudentAddWidget extends Component { //warning: do not use generation!
  addStudent = () => {
    const nameRef = this.refs.name;
    const sidRef = this.refs.sid;
    const emailRef = this.refs.email;

    if (nameRef.value && sidRef.value && emailRef.value) {
      props.addStudent(nameRef.value, sidRef.value, emailRef.value);
      nameRef.value = sidRef.value = emailRef.value = '';
    }
  }

  render() {
    return (
        <div className={styles['form-content']}>
          <h2><FormattedMessage id="createNewStudent" /></h2>
          <input placeholder="HO TEN" ref="name" />
          <input placeholder="MSSV" ref="sid" />
          <input placeholder="EMAIL" ref="email" />
          <a href="#" onClick={this.addStudent}><FormattedMessage id="submit" /></a>
        </div>
    );
  }


}

StudentAddWidget.propTypes = {
  addStudent: PropTypes.func.isRequired,
  showAddStudent: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(StudentAddWidget); //warning: StudentAddWidget into injectIntl(StudentCreateWidget)
