// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_ADD_STUDENT = 'TOGGLE_ADD_STUDENT';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function toggleAddStudent() {
  return {
    type: TOGGLE_ADD_STUDENT,
  };
}
