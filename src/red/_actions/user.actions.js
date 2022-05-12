import { userConstants } from '../_constants';
import { userService } from '../_services';

export const userActions = {
  getAll,
  delete: _delete,
  save,
};

function getAll() {
  return (dispatch) => {
    dispatch(request());
    userService.getAll().then(
      (users) => dispatch(success(users)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
}

function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));

    userService.delete(id).then(
      (user) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: userConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: userConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error };
  }
}

function save(data) {
  return (dispatch) => {
    dispatch(success(data));
  };

  function request(id) {
    return { type: userConstants.ADD_REQUEST, data };
  }
  function success(id) {
    return { type: userConstants.ADD_SUCCESS, data };
  }
  function failure(id, error) {
    return { type: userConstants.ADD_FAILURE, data, error };
  }
}

// function save(data) {
//   return (dispatch) => {
//     dispatch(request(data));

//     userService.save(data).then(
//       (user) => dispatch(success(data)),
//       (error) => dispatch(failure(data, error.toString()))
//     );
//   };

//   function request(id) {
//     return { type: userConstants.ADD_REQUEST, data };
//   }
//   function success(id) {
//     return { type: userConstants.ADD_SUCCESS, data };
//   }
//   function failure(id, error) {
//     return { type: userConstants.ADD_FAILURE, data, error };
//   }
// }
