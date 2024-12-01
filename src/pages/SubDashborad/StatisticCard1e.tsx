import { StatisticCard } from '@ant-design/pro-components';
import { Divider } from 'antd';

const { Statistic } = StatisticCard;

const StatisticCard1e = () => {
  return (
    <StatisticCard
      statistic={{
        title: '今月の総接触数',
        value: '850件',
        description: (
          <div style={{ width: '300' }}>
            <div>
            前月比 <span style={{ color: 'green' }}>+10%</span>
            </div>
            <Divider orientation="center" style={{ marginTop: 20, marginBottom: 20 }}></Divider>
            <Statistic title="当月の架電 27件" value=" " />
            <Statistic title="当月の通話 6件" value=" " />
            <Statistic title="当月の獲得 4件" value=" " />
          </div>
        ),
      }}
      style={{ height: 300 }}
    />
  );
};

export default StatisticCard1e;
