'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {item, Var,items } from '@/lib/constant'
import {motion } from 'framer-motion'

const Summary = () => {
  const router = useRouter()
  return (
    <motion.section variants={Var} initial='start' animate='end' className='flex flex-col gap-2 text-[14px] font-medium'>
        <div className='flex flex-col gap-2 bg-white border-2 border-solid border-[#D4CFCF] rounded-md'>

            <motion.label variants={item} className='border-b-2 border-[#D4CFCF] p-3 w-[100%]'>
              SUMMARY
            </motion.label>

            <motion.div variants={item} className='flex flex-col p-3 gap-4 border-b-2 border-[#D4CFCF]'>
              {
                items.map((item, index) => (
                  <div key={index} className='flex justify-between items-center gap-10'>

                      <div  className='flex gap-3'>
                          <Image src={item.src} width={40} height={40} alt={item.name} priority/>
                          <div className='flex flex-col'>
                            <span className='text-[#828282]'>Quantity: {item.quantity}</span>
                            <span>{item.name}</span>
                          </div>
                      </div>
                      <span className='self-end'>{item.price}</span>
                  </div>
                ))
              }
            </motion.div>

            <div className='flex flex-col border-b-2 border-[#D4CFCF]'>
              <motion.div variants={item} className='flex justify-between p-2'>
                  <span className='text-[#828282]'>Shipping</span>
                  <span>10$</span>
              </motion.div>
              <motion.div variants={item} className='flex justify-between p-2'>
                  <span className='text-[#828282]'>Discount</span>
                  <span>0$</span>
              </motion.div>
            </div>

            <motion.div variants={item} className='flex justify-between p-2'>
                  <span>Total</span>
                  <span>115$</span>
            </motion.div>
        </div>
        <motion.button variants={item} className='bg-white border-2 border-[#D4CFCF] rounded p-1' onClick={() => router.push('/failed')}>Cancel</motion.button>
    </motion.section>
  )
}

export default Summary