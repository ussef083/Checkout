import React from 'react'
import {item, Var } from '@/lib/constant'
import {motion } from 'framer-motion'


type CheckoutHeaderProps = {
    navbarTitle : string,
}
const CheckoutHeader = ({navbarTitle} : CheckoutHeaderProps) => {

    return (
        <motion.div variants={Var} initial='start' animate='end' className=' flex justify-between items-center p-3 border-b-2 border-[#D4CFCF] font-medium text-[14px]'>
                <motion.label variants={item}>
                        CHECKOUT
                </motion.label>
                <div className='flex justify-between gap-3 text-[#828282]'>
                        <motion.span variants={item} className={`${navbarTitle === 'Shipping' && 'text-[#000000] font-semibold'} cursor-pointer`}>Shipping</motion.span> 
                        <motion.span variants={item} className={`${navbarTitle === 'Payment' && 'text-[#000000] font-semibold'} cursor-pointer`}>Payment</motion.span>
                </div>
        </motion.div>
    )
}

export default CheckoutHeader