import { StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import { useState } from 'react';

const { Statistic, Divider } = StatisticCard;
const StatisticCard2 = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
        <StatisticCard
          statistic={{
            title: '今月の総接触数28件/日',
            value: 2673,
          }}
        />
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <StatisticCard
          statistic={{
            title: '新規獲得数',
            value: 135,
            description: <Statistic title="占比" value="61.5%" />,
          }}
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg"
              alt="平均接触数"
              width="100%"
            />
          }
          chartPlacement="left"
        />
        <StatisticCard
          statistic={{
            title: '平均接触数',
            value: '28件/日',
            description: <Statistic title="占比" value="38.5%" />,
          }}
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/6YR18tCxJ/huanlv.svg"
              alt="百分比"
              width="100%"
            />
          }
          chartPlacement="left"
        />
      </StatisticCard.Group>
    </RcResizeObserver>
  );
};
export default StatisticCard2;
