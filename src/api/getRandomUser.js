export function getPeople(list) {
  return function (dispatch) {
    fetch("https://randomuser.me/api/?results=100&nat=BR")
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        dispatch({
          type: "GET_PEOPLE",
          payload: list ? [...list, ...response.results] : response.results
        });
      })
      .catch(function (error) {
        dispatch({ type: "GET_REJECT", msg: "rest API error" });
      });
  };
}

export function getMyProfile(list) {
  return function (dispatch) {
    fetch("https://randomuser.me/api/?results=1")
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        dispatch({
          type: "GET_PROFILE",
          payload: list ? [...list, ...response.results] : response.results
        });
      })
      .catch(function (error) {
        dispatch({ type: "GET_REJECT", msg: "rest API error" });
      });
  };
}
