import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Grid } from '../src';


const App = (
  <div>
    <Grid>
      <Row>
        <Col sm={6}>
          <p>Test</p>
        </Col>

        <Col sm={6}>
          <p>Test</p>
        </Col>
      </Row>
    </Grid>
  </div>
);

ReactDOM.render( App, document.getElementById( 'root' ));
