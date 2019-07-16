import React from 'react';
import { connect } from 'react-redux';

import { updateQuery } from '../../actions';

import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
class SearchBar extends React.Component {
  onSubmitQuery = event => {
    event.preventDefault();
  };

  render() {
    const { query } = this.props.service;
    return (
      <form onSubmit={event => this.onSubmitQuery(event)}>
        <InputGroup size="lg" className="mb-3">
          <FormControl
            value={query}
            onChange={e => this.props.updateQuery(e.target.value)}
            placeholder="Buscar serviço"
            aria-label="Buscar serviço"
          />
          <InputGroup.Append>
            <Button variant="primary" type="submit">
              Buscar
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
    );
  }
}

const mapDispatchToProps = state => {
  return { service: state.service };
};

export default connect(
  mapDispatchToProps,
  { updateQuery }
)(SearchBar);
