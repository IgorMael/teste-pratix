import pratixApi from '../api/pratixApi';

export const getServiceList = _ => async dispatch => {
  const response = await pratixApi.get(
    '/geo/get/simple/radio/40/-3.7553375/-38.6296543'
  );

  dispatch({
    type: 'GET_SERVICES',
    payload: response.data
  });
};

export const updateQuery = query => dispatch =>
  dispatch({
    type: 'UPDATE_QUERY',
    payload: query
  });

export const loadMore = _ => dispatch =>
  dispatch({
    type: 'LOAD_MORE'
  });
