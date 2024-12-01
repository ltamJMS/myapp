import React from 'react';
import { ProCard } from '@ant-design/pro-components';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import StatisticCard2 from './SubDashborad/StatisticCard2';
import StatisticCard3 from './SubDashborad/StatisticCard3';
import StatisticCard1e from './SubDashborad/StatisticCard1e';
import Grid4 from './SubDashborad/Grid4';
import Rechart6 from './SubDashborad/Rechart6';
import Rechart2 from './SubDashborad/Rechart2';

const callData = [
  { 名前: '1月', 総接触数: 400, 成功: 320, 失敗: 80 },
  { 名前: '2月', 総接触数: 500, 成功: 420, 失敗: 80 },
  { 名前: '3月', 総接触数: 450, 成功: 350, 失敗: 100 },
  { 名前: '4月', 総接触数: 600, 成功: 510, 失敗: 90 },
  { 名前: '5月', 総接触数: 700, 成功: 600, 失敗: 100 },
  { 名前: '6月', 総接触数: 650, 成功: 550, 失敗: 100 },
  { 名前: '7月', 総接触数: 800, 成功: 700, 失敗: 100 },
];

const Dashboard: React.FC = () => {
  return (
    <div style={{ background: '#F5F7FA' }}>
      <ProCard direction="column" ghost gutter={[0, 16]}>
        {/* chart 1 */}
        <ProCard gutter={16} ghost>
          <Grid4 />
        </ProCard>
        {/* chart 2 */}
        <ProCard title="月次比較" gutter={16} ghost>
          <ProCard colSpan={18}>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={callData}>
                <defs>
                  <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 2" />
                <XAxis dataKey="名前" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="総接触数"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorCalls)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ProCard>
          <ProCard colSpan={6}>
            <StatisticCard1e />
          </ProCard>
        </ProCard>
        {/* chart 3 */}
        <ProCard title="年次比較" bordered headerBordered>
        <Rechart6 />
        </ProCard>
        {/* chart 4 */}
        <ProCard title="年月次データ概要次比較" bordered headerBordered>
        <Rechart2 />
        </ProCard>
        {/* chart 5 */}
        <ProCard gutter={16} ghost>
          <StatisticCard3 />
        </ProCard>
        {/* chart 6 */}
        <ProCard gutter={16} ghost>
          <StatisticCard2 />
        </ProCard>
      </ProCard>
    </div>
  );
};

export default Dashboard;
