import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './LoadingSpinner.css';
const LoadingSpinner = _ => {
  return (
    <div className="loading-spinner">
      {' '}
      <Spinner
        className="custom-spinner"
        animation="border"
        variant="primary"
      />{' '}
    </div>
  );
};
export default LoadingSpinner;
