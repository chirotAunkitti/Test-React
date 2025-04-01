//-----------------------------------------------------------------------------------------------------------
//////////โจทย์
import React, {useEffect, useState} from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1)
    }, 1000)

    return () => clearTimeout(interval)
  }, [])

  return <div>Time: {seconds} seconds</div>
}

//-----------------------------------------------------------------------------------------------------------
//ปัญหา
//-----------------------------------------------------------------------------------------------------------

// 1.ใช้ clearTimeout แทน clearInterval  - ทำให้ clear interval ไม่ได้  ****แก้เป็น clearInterval()

// 2.setSeconds(seconds + 1) ไม่ update ค่าถูก  - ใช้ค่าจาก render แรกตลอด  ****แก้เป็น setSeconds(prev => prev + 1)

// 3.การใช้ state ที่ไม่ fresh ใน setInterval   - โค้ดดูเหมือนจะทำงาน แต่ค่าจะค้าง ****ใช้ callback form

//-----------------------------------------------------------------------------------------------------------
///////////////ตอบ
import React, { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1); 
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return <div>Time: {seconds} seconds</div>;
}

//-----------------------------------------------------------------------------------------------------------