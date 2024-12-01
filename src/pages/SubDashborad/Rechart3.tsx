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
        "月": "2024-01",  
        "架電件数": 450,  
        "通話件数": 110,  
        "獲得件数": 60,  
        "コンタクト率": "24.4%"  
    },  
    {  
        "月": "2024-02",  
        "架電件数": 420,  
        "通話件数": 102,  
        "獲得件数": 55,  
        "コンタクト率": "23.8%"  
    },  
    // Thêm dữ liệu tháng tiếp theo  
    {  
        "月": "2024-07",  
        "架電件数": 655,  
        "通話件数": 145,  
        "獲得件数": 75,  
        "コンタクト率": "22.1%"  
    }  
];  

const Rechart3 = () => {  
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
        <XAxis dataKey="月" />  
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

export default Rechart3;