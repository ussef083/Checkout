'use client'
import React,{useState} from 'react'
import {NavProps} from '@/lib/constant'
import Shipping from './Shipping'
import Payment from './Payment'
import { Data, itemsPurchased } from '@/lib/constant'

type InfoWrapperProps = {
    navbarTitle : NavProps
    setNavbarTitle: React.Dispatch<React.SetStateAction<NavProps>>
}


const InfoWrapper = ({navbarTitle, setNavbarTitle} : InfoWrapperProps) => {

  const [data, setData] = useState<Data>({
    order : itemsPurchased,
  })
  return (
    <div className='p-3'>
        {navbarTitle === 'Shipping' && <Shipping setNavbarTitle={setNavbarTitle} setData={setData}/>}
        {navbarTitle === 'Payment' && <Payment setData={setData} data={data}/>}
    </div>
  )
}

export default InfoWrapper