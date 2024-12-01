import React from 'react';  
import {  
  BarChart,  
  Bar,  
  XAxis,  
  YAxis,  
  CartesianGrid,  
  Tooltip,  
  Legend,  
  ResponsiveContainer,  
} from 'recharts';  

const data = [  
    {  
        "キャンペーン名": "キャンペーンA",  
        "総架電件数": 1500,  
        "通話件数": 400,  
        "獲得件数": 200  
    },  
    {  
        "キャンペーン名": "キャンペーンB",  
        "総架電件数": 1200,  
        "通話件数": 350,  
        "獲得件数": 180  
    },  
    {  
        "キャンペーン名": "キャンペーンC",  
        "総架電件数": 1700,  
        "通話件数": 450,  
        "獲得件数": 230  
    }  
    // Thêm chiến dịch khác nếu cần thiết  
];  

const Rechart5 = () => {  
  return (  
    <ResponsiveContainer width="100%" height={400}>  
      <BarChart  
        data={data}  
        margin={{  
          top: 10,  
          right: 30,  
          left: 0,  
          bottom: 0,  
        }}  
      >  
        <CartesianGrid strokeDasharray="3 3" />  
        <XAxis dataKey="キャンペーン名" />  
        <YAxis />  
        <Tooltip />  
        <Legend />  
        <Bar dataKey="総架電件数" fill="#8884d8" />  
        <Bar dataKey="通話件数" fill="#82ca9d" />  
        <Bar dataKey="獲得件数" fill="#ffc658" />  
      </BarChart>  
    </ResponsiveContainer>  
  );  
};  

export default Rechart5;