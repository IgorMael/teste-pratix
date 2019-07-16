const defaultState = {
  page: 1,
  pageSize: 10,
  query: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_SERVICES':
      return { ...state, ...action.payload };
    case 'UPDATE_QUERY':
      return { ...state, ...defaultState, query: action.payload };
    case 'LOAD_MORE':
      return state.data.filter(
        item =>
          item.atuacao &&
          item.atuacao.servicos.filter(servico => {
            return (
              servico.toLowerCase().search(state.query.toLowerCase()) !== -1
            );
          }).length > 0
      ).length >
        state.page * state.pageSize
        ? { ...state, page: state.page + 1 }
        : state;
    default:
      return state;
  }
};
