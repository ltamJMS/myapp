import { StatisticCard } from '@ant-design/pro-components';
import { Divider } from 'antd';

const { Statistic } = StatisticCard;

const StatisticCard1b = () => {
  return (
    <StatisticCard
      chartPlacement="left"
      statistic={{
        title: '通話件数',
        value: 2673,
        suffix: '件',
        description: (
          <div style={{ width: '200'}}>
            <Statistic title="前年比" value="2.08%" trend="up" />
            <Statistic title="前月比" value="4.78%" trend="down" />
            <Divider orientation="center" style={{ marginTop: 10, marginBottom:10 }}></Divider>
            <Statistic title="当日の通話件数" value="6 件" />
          </div>
        ),
      }}
      style={{ height: 180 }}
    />
  );
};

export default StatisticCard1b;
