import React from 'react';
import Card from 'react-bootstrap/Card';

import './cardService.css';

class CardService extends React.Component {
  render() {
    const { atuacao, radar, security, status } = this.props.data;
    return (
      <Card className="CardService">
        <Card.Header>{atuacao.area || 'AFILIADO'}</Card.Header>
        <Card.Body className={{ afiliado: !atuacao.area }}>
          <Card.Subtitle className="mb-2">
            {atuacao &&
              atuacao.servicos.map(servico => (
                <span className="services" key={servico}>
                  {servico}
                </span>
              ))}
          </Card.Subtitle>
          <div className="info text-muted">
            <p>
              {radar.cidade} - {radar.estado}
            </p>
            <p>{status.email}</p>
            <p className="stars">{security.estrelas}★</p>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default CardService;
