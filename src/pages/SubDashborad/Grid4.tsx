import React from 'react';
import { Col, Row } from 'antd';
import StatisticCard1a from './StatisticCard1a';
import StatisticCard1b from './StatisticCard1b';
import StatisticCard1c from './StatisticCard1c';
import StatisticCard1d from './StatisticCard1d';

const Grid4: React.FC = () => (
  <>
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <StatisticCard1a />
      </Col>
      <Col className="gutter-row" span={6}>
        <StatisticCard1b />
      </Col>
      <Col className="gutter-row" span={6}>
        <StatisticCard1c />
      </Col>
      <Col className="gutter-row" span={6}>
        <StatisticCard1d />
      </Col>
    </Row>
  </>
);

export default Grid4;
