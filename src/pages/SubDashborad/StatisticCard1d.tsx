import { StatisticCard } from '@ant-design/pro-components';
import { Divider, Progress } from 'antd';

const { Statistic } = StatisticCard;

const StatisticCard1d = () => {
  return (
    <StatisticCard
      chartPlacement="left"
      statistic={{
        title: '目標トラッキング',
        value: '70%',
        description: (
          <div style={{ width: '200'}}>
            <Statistic title="実績 2673件" value=" 〜 目標 3818件" />
            <Divider orientation="center" style={{ marginTop: 10, marginBottom:10 }}></Divider>
            <Progress percent={70} />
          </div>
        ),
      }}
      style={{ height: 180 }}
    />
  );
};

export default StatisticCard1d;
