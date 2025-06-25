import { Card } from 'flowbite-react';
import React from 'react'
import CountUp from 'react-countup';
interface AnalyticsCardProps {
    title: string;
    count: number;
    icon: React.ReactNode;
}
 
const AnalyticsCard : React.FC<AnalyticsCardProps> = ({
    title,
    count,
    icon
}) => {
  return (
    <Card className="w-full  bg-gray-900 border-none">
      <div className='flex items-center gap-3 text-white'>
        {icon}
        <h5 className="text-2xl font-bold tracking-tight">
            {title}
        </h5>
      </div>
      <p className="font-normal text-white">
        Total Count <CountUp start={0} end={count}/>
      </p>
    </Card>
  )
}

export default AnalyticsCard;