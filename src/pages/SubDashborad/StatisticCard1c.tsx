import { StatisticCard } from '@ant-design/pro-components';
import { Divider } from 'antd';

const { Statistic } = StatisticCard;

const StatisticCard1c = () => {
  return (
    <StatisticCard
      chartPlacement="left"
      statistic={{
        title: '獲得件数',
        value: 692,
        suffix: '件',
        description: (
          <div style={{ width: '200'}}>
            <Statistic title="前年比" value="1.22%" trend="up" />
            <Statistic title="前月比" value="3.06%" trend="down" />
            <Divider orientation="center" style={{ marginTop: 10, marginBottom:10 }}></Divider>
            <Statistic title="当日の獲得件数" value="4 件" />
          </div>
        ),
      }}
      style={{ height: 180 }}
    />
  );
};

export default StatisticCard1c;
