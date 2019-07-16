import React from 'react';
import { connect } from 'react-redux';
import { getServiceList, loadMore } from '../../actions';
import CardService from '../cardService/cardService';
import LoadingSpinner from '../loading/LoadingSpinner';
import debounce from 'lodash/debounce';
import './listServices.css';

class ListServices extends React.Component {
  loadScrollListener() {
    window.onscroll = debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        this.props.loadMore();
      }
    }, 900);
  }

  componentDidMount() {
    this.props.getServiceList();
    this.loadScrollListener();
  }

  renderCards = _ => {
    const { service } = this.props;
    return service.data
      .filter(
        item =>
          item.atuacao &&
          item.atuacao.servicos.filter(servico => {
            return (
              servico.toLowerCase().search(service.query.toLowerCase()) !== -1
            );
          }).length > 0
      )
      .slice(0, service.pageSize * service.page)
      .map((item, index) => <CardService key={index} data={item} />);
  };

  render() {
    return this.props.service && this.props.service.data ? (
      <div className="ListService">{this.renderCards()}</div>
    ) : (
      <LoadingSpinner />
    );
  }
}
const mapDispatchToProps = state => {
  return { service: state.service };
};

export default connect(
  mapDispatchToProps,
  { getServiceList, loadMore }
)(ListServices);
