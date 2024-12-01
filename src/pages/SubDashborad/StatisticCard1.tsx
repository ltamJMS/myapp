import { ProCard } from '@ant-design/pro-components';
import Rechart6 from './Rechart6';

const StatisticCard1 = () => {
  return (
    <ProCard title="年次比較" bordered headerBordered>
      <ProCard>
        <Rechart6 />
      </ProCard>
    </ProCard>
  );
};

export default StatisticCard1;
