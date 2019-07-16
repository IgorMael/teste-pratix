import React from 'react';

import ListServices from '../components/listServices/listServices';
import SearchBar from '../components/searchBar/searchBar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Servicos extends React.Component {
  render() {
    return (
      <Container className="Services">
        <Row>
          <h2 style={{ marginTop: ' 30px' }}>Pratix</h2>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <SearchBar />
          </Col>
        </Row>
        <ListServices />
      </Container>
    );
  }
}

export default Servicos;
