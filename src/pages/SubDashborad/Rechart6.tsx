import React, { useState } from 'react';  
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';  
import { Select, Tabs } from 'antd';  

const { Option } = Select;  
const { TabPane } = Tabs;  

const yearlyComparisonData = [  
  { "year": 2020, "month": "1月", "収益": 20000 },  
  { "year": 2021, "month": "1月", "収益": 21000 },  
  { "year": 2022, "month": "1月", "収益": 22000 },  
  { "year": 2023, "month": "1月", "収益": 23000 },  
  { "year": 2024, "month": "1月", "収益": 43000 },  
  { "year": 2020, "month": "2月", "収益": 22000 },  
  { "year": 2021, "month": "2月", "収益": 23000 },  
  { "year": 2022, "month": "2月", "収益": 24000 },  
  { "year": 2023, "month": "2月", "収益": 25000 },  
  { "year": 2024, "month": "2月", "収益": 39000 },  
  { "year": 2020, "month": "3月", "収益": 23000 },  
  { "year": 2021, "month": "3月", "収益": 24000 },  
  { "year": 2022, "month": "3月", "収益": 25000 },  
  { "year": 2023, "month": "3月", "収益": 26000 },  
  { "year": 2024, "month": "3月", "収益": 38000 },  
  { "year": 2020, "month": "4月", "収益": 24000 },  
  { "year": 2021, "month": "4月", "収益": 25000 },  
  { "year": 2022, "month": "4月", "収益": 26000 },  
  { "year": 2023, "month": "4月", "収益": 27000 },
  { "year": 2024, "month": "4月", "収益": 29000 },  
  { "year": 2020, "month": "5月", "収益": 25000 },  
  { "year": 2021, "month": "5月", "収益": 26000 },  
  { "year": 2022, "month": "5月", "収益": 27000 },  
  { "year": 2023, "month": "5月", "収益": 28000 },  
  { "year": 2024, "month": "5月", "収益": 43000 },  
  { "year": 2020, "month": "6月", "収益": 27000 },  
  { "year": 2021, "month": "6月", "収益": 28000 },  
  { "year": 2022, "month": "6月", "収益": 29000 },  
  { "year": 2023, "month": "6月", "収益": 31000 },  
  { "year": 2024, "month": "6月", "収益": 49000 },
  { "year": 2020, "month": "7月", "収益": 25000 },  
  { "year": 2021, "month": "7月", "収益": 26000 },  
  { "year": 2022, "month": "7月", "収益": 27000 },  
  { "year": 2023, "month": "7月", "収益": 28000 },  
  { "year": 2024, "month": "7月", "収益": 53000 },  
  { "year": 2020, "month": "8月", "収益": 27000 },  
  { "year": 2021, "month": "8月", "収益": 28000 },  
  { "year": 2022, "month": "8月", "収益": 29000 },  
  { "year": 2023, "month": "8月", "収益": 31000 },  
  { "year": 2024, "month": "8月", "収益": 52000 },
  { "year": 2020, "month": "9月", "収益": 30000 },  
  { "year": 2021, "month": "9月", "収益": 32000 },  
  { "year": 2022, "month": "9月", "収益": 35000 },  
  { "year": 2023, "month": "9月", "収益": 37000 },  
  { "year": 2024, "month": "9月", "収益": 40000 },  
  { "year": 2020, "month": "10月", "収益": 35000 },  
  { "year": 2021, "month": "10月", "収益": 36000 },  
  { "year": 2022, "month": "10月", "収益": 38000 },  
  { "year": 2023, "month": "10月", "収益": 40000 },  
  { "year": 2024, "month": "10月", "収益": 47000 },  
  { "year": 2020, "month": "11月", "収益": 45000 },  
  { "year": 2021, "month": "11月", "収益": 40000 },  
  { "year": 2022, "month": "11月", "収益": 39000 },  
  { "year": 2023, "month": "11月", "収益": 42000 },  
  { "year": 2024, "month": "11月", "収益": 45000 },  
];  

const Rechart6 = () => {  
  const [selectedYear, setSelectedYear] = useState(2024);  
  const [chartType, setChartType] = useState('bar');  

  const handleYearChange = (value) => {  
    setSelectedYear(value);  
  };  

  const handleChartChange = (key) => {  
    setChartType(key);  
  };  

  // Lọc dữ liệu dựa trên năm được chọn  
  const filteredData = yearlyComparisonData.filter(item => item.year === selectedYear);  

  return (  
    <div>  
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}> 
      <Tabs defaultActiveKey="bar" onChange={handleChartChange}>  
          {/* Đừng quên đóng kiểu thẻ TabPane */}  
          <TabPane tab="Bar Chart" key="bar" />  
          <TabPane tab="Line Chart" key="line" />  
          <TabPane tab="Area Chart" key="area" />  
        </Tabs>  
      <Select defaultValue={2024} style={{ width: 120, marginBottom: 20 }} onChange={handleYearChange}>  
        <Option value={2020}>2020</Option>  
        <Option value={2021}>2021</Option>  
        <Option value={2022}>2022</Option>  
        <Option value={2023}>2023</Option>  
        <Option value={2024}>2024</Option>  
      </Select>  
        
      </div>  

 

      <ResponsiveContainer width="100%" height={400}>  
        {chartType === 'bar' && (  
          <BarChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>  
            <CartesianGrid strokeDasharray="3 3" />  
            <XAxis dataKey="month" />  
            <YAxis />  
            <Tooltip />  
            <Bar dataKey="収益" fill="#8884d8" name={`${selectedYear}年`} />  
          </BarChart>  
        )}  
        {chartType === 'line' && (  
          <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>  
            <CartesianGrid strokeDasharray="3 3" />  
            <XAxis dataKey="month" />  
            <YAxis />  
            <Tooltip />  
            <Line type="monotone" dataKey="収益" stroke="#8884d8" name={`${selectedYear}年`} />  
          </LineChart>  
        )}  
        {chartType === 'area' && (  
          <AreaChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>  
            <defs>  
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">  
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>  
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>  
              </linearGradient>  
            </defs>  
            <CartesianGrid strokeDasharray="3 3" />  
            <XAxis dataKey="month" />  
            <YAxis />  
            <Tooltip />  
            <Area type="monotone" dataKey="収益" stroke="#8884d8" fill="url(#colorUv)" name={`${selectedYear}年`} />  
          </AreaChart>  
        )}  
      </ResponsiveContainer>  
    </div>  
  );  
};  

export default Rechart6;