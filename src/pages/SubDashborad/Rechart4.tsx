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
        "年": "2024",  
        "架電件数": 3425,  
        "通話件数": 847,  
        "獲得件数": 451,  
        "平均コンタクト率": "24.7%"  
    },  
    {  
        "年": "2023",  
        "架電件数": 5000,  
        "通話件数": 1200,  
        "獲得件数": 600,  
        "平均コンタクト率": "24.0%"  
    }  
    // Thêm dữ liệu năm khác nếu cần  
];  

const Rechart4 = () => {  
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
        <XAxis dataKey="年" />  
        <YAxis />  
        <Tooltip />  
        <Legend />  
        <Bar dataKey="架電件数" fill="#8884d8" />  
        <Bar dataKey="通話件数" fill="#82ca9d" />  
        <Bar dataKey="獲得件数" fill="#ffc658" />  
      </BarChart>  
    </ResponsiveContainer>  
  );  
};  

export default Rechart4;