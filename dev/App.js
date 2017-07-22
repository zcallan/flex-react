import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Grid } from '../src';


const App = (
  <div>
    <Grid>
      <Row>
        <Col sm={2} md={4} lg={1}>
          <p>Test</p>
        </Col>

        <Col sm={2} md={8} lg={11}>
          <p>Test</p>
        </Col>

        <Col sm={8} md={0}>
          <p>Test</p>
        </Col>
      </Row>
    </Grid>
  </div>
);

ReactDOM.render( App, document.getElementById( 'root' ));
