import React, { useState } from 'react';
import { ProCard, StatisticCard } from '@ant-design/pro-components';
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import {
  monthData,
  weekData,
  dailyData,
  targetData,
  seasonalData,
  performanceData,
  campaignDataToday,
  forecastData,
  communicationAttemptData,
  growthRateData,
  yearlyComparisonData,
} from '../pages/SubDashborad/dump';
import Rechart2 from './SubDashborad/Rechart2';
import Rechart3 from './SubDashborad/Rechart3';
import Rechart4 from './SubDashborad/Rechart4';
import Rechart5 from './SubDashborad/Rechart5';
// yearlyComparisonData, growthRateData, communicationAttemptData, forecastData, campaignDataToday
// Dashboard component
const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const handleYearChange = (e: any) => {
    setSelectedYear(+e.target.value);
  };

  const dataForSelectedYear = seasonalData.filter((data) => data.year === selectedYear);

  return (
    <div style={{ background: '#F5F7FA' }}>
      <ProCard direction="column" ghost gutter={[0, 16]}>

        <ProCard title="月次データ概要" gutter={16} ghost>
          <ResponsiveContainer width="100%" height={300}>
          <Rechart2 />
            
          </ResponsiveContainer>
        </ProCard>

        <ProCard title="月次データ概要" gutter={16} ghost>
          <ResponsiveContainer width="100%" height={300}>
          <Rechart3 />
            
          </ResponsiveContainer>
        </ProCard>

        <ProCard title="月次データ概要" gutter={16} ghost>
          <ResponsiveContainer width="100%" height={300}>
          <Rechart4 />
            
          </ResponsiveContainer>
        </ProCard>

        <ProCard title="月次データ概要" gutter={16} ghost>
          <ResponsiveContainer width="100%" height={300}>
          <Rechart5 />
            
          </ResponsiveContainer>
        </ProCard>

        {/* Monthly Data Area Chart */}
        <ProCard title="月次データ概要" gutter={16} ghost>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthData}>
              <defs>
                <linearGradient id="colorContactCount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="接触数"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorContactCount)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ProCard>
        {/* Yearly Comparison Line Chart */}
        <ProCard title="年次比較" gutter={16} ghost>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={yearlyComparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="収益" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </ProCard>

        {/* Growth Rate Bar Chart */}
        <ProCard title="成長率" gutter={16} ghost>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={growthRateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="成長率" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </ProCard>
        {/* Communication Attempts Chart */}
        <ProCard title="コミュニケーション試行" gutter={16} ghost>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={communicationAttemptData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="試行回数" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="残数" fill="#ff7300" />
            </BarChart>
          </ResponsiveContainer>
        </ProCard>
        {/* Forecast Data Area Chart */}
        <ProCard title="成長予測" gutter={16} ghost>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={forecastData}>
              <defs>
                <linearGradient id="colorScenario1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="シナリオ1"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorScenario1)"
              />
              <Area type="monotone" dataKey="シナリオ2" stroke="#82ca9d" fillOpacity={0.5} />
              <Area type="monotone" dataKey="シナリオ3" stroke="#ff7300" fillOpacity={0.5} />
            </AreaChart>
          </ResponsiveContainer>
        </ProCard>
        {/* Campaign Performance Bar Chart */}
        <ProCard title="キャンペーンパフォーマンス" gutter={16} ghost>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={campaignDataToday}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="campaign" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="接触率" fill="#8884d8" />
              <Bar dataKey="SPC" fill="#82ca9d" />
              <Bar dataKey="SPL" fill="#ff4040" />
            </BarChart>
          </ResponsiveContainer>
        </ProCard>

        {/* Weekly Data Bar Chart */}
        <ProCard title="週次データ分布" gutter={16} ghost>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weekData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="リスト数" fill="#8884d8" />
              <Bar dataKey="接触数" fill="#82ca9d" />
              <Bar dataKey="獲得数" fill="#ff4040" />
            </BarChart>
          </ResponsiveContainer>
        </ProCard>

        {/* New: Target Tracking Bar Chart */}
        <ProCard title="目標トラッキング" gutter={16} ghost>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={targetData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="target" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="実績" fill="#8884d8" />
              <Bar dataKey="目標" fill="#ff7300" />
            </BarChart>
          </ResponsiveContainer>
        </ProCard>

        {/* Seasonal Performance Line Chart */}
        <ProCard title="季節別パフォーマンス" gutter={16} ghost>
          <ResponsiveContainer width="100%" height={300}>
            <div>
              <select onChange={handleYearChange} value={selectedYear}>
                {[2020, 2021, 2022, 2023, 2024].map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dataForSelectedYear}>
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="quarter" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="performance" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </ResponsiveContainer>
        </ProCard>

        {/* Performance by Year Bar Chart */}
        <ProCard title="年次パフォーマンス" gutter={16} ghost>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="BS別送" fill="#8884d8" />
              <Bar dataKey="めちゃ得" fill="#82ca9d" />
              <Bar dataKey="おまとめ" fill="#ff4040" />
            </BarChart>
          </ResponsiveContainer>
        </ProCard>

        {/* Daily Data Line Chart */}
        <ProCard title="日次接触と獲得" gutter={16} ghost>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="接触数" stroke="#8884d8" />
              <Line type="monotone" dataKey="獲得数" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </ProCard>

        {/* Statistics Cards */}
        <ProCard gutter={16} ghost>
          <ProCard colSpan={8}>
            <StatisticCard
              statistic={{
                title: '今月の総接触数',
                value: 850, // Example static value
                suffix: '件',
              }}
              style={{ height: 200 }}
            />
          </ProCard>
          <ProCard colSpan={8}>
            <StatisticCard
              statistic={{
                title: '新規獲得数',
                value: 200, // Example static value
                suffix: '件',
              }}
              style={{ height: 200 }}
            />
          </ProCard>
          <ProCard colSpan={8}>
            <StatisticCard
              statistic={{
                title: '平均接触数',
                value: 28, // Example static value
                suffix: '件/日',
              }}
              style={{ height: 200 }}
            />
          </ProCard>
        </ProCard>
      </ProCard>
    </div>
  );
};

export default Dashboard;
