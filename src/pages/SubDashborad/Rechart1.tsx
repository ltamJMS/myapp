import { StatisticCard } from '@ant-design/pro-components';  
import RcResizeObserver from 'rc-resize-observer';  
import { useState } from 'react';  

const { Statistic, Divider } = StatisticCard;

const StatisticCard2 = () => {  
  const [responsive, setResponsive] = useState(false);  

  const dataForJuly2024 = {  
    callMade: 655,  
    callReceived: 145,  
    successfulDeals: 75,  
    contactRate: "22.1%",  
  };  

  return (  
    <RcResizeObserver  
      key="resize-observer"  
      onResize={(offset) => {  
        setResponsive(offset.width < 596);  
      }}  
    >  
      <StatisticCard.Group direction={responsive ? 'column' : 'row'}>  
        <StatisticCard  
          statistic={{  
            title: 'Cuộc gọi đã thực hiện',  
            value: dataForJuly2024.callMade,  
          }}  
        />  
        <Divider type={responsive ? 'horizontal' : 'vertical'} />  
        <StatisticCard  
          statistic={{  
            title: 'Cuộc gọi thành công',  
            value: dataForJuly2024.callReceived,  
          }}  
        />  
        <Divider type={responsive ? 'horizontal' : 'vertical'} />  
        <StatisticCard  
          statistic={{  
            title: 'Giao dịch thành công',  
            value: dataForJuly2024.successfulDeals,  
            description: <Statistic title="Tỷ lệ liên hệ" value={dataForJuly2024.contactRate} />,  
          }}  
          chart={  
            <img  
              src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg"  
              alt="biểu đồ tỷ lệ"  
              width="100%"  
            />  
          }  
          chartPlacement="left"  
        />  
      </StatisticCard.Group>  
    </RcResizeObserver>  
  );  
};  

export default StatisticCard2;