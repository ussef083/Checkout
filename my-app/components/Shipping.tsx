import React from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { addressSchema, FormValues, ShippingProps, item, Var } from '@/lib/constant'
import {motion } from 'framer-motion'

const Shipping = ({setNavbarTitle, setData} : ShippingProps) => {
    
    const {register, handleSubmit, formState : {errors}} = useForm<FormValues>({resolver : yupResolver(addressSchema)})

    const submitForm = (data : FormValues) => {

        const {address, city,country,postalCode} = data
        const addressInfo = address + ', ' + city + ', ' + country + ', ' + postalCode
        setData(prev => ({...prev, customer:{address: addressInfo}}))
        setNavbarTitle('Payment')
    }

  return (
    <motion.div variants={Var} initial='start' animate='end' className='box-border flex gap-3 flex-col text-[14px]'>
        <motion.h3 variants={item}>Shipping Address</motion.h3>
        <motion.p variants={item} className='text-[#828282] text-[14px]'>Kindly complete the address section of this form accurately.</motion.p>

        <form className='flex gap-3 flex-col text-[#828282]' onSubmit={handleSubmit(submitForm)}>
                <motion.div className='flex gap-2 flex-col' variants={item}>
                    <p>Address</p>
                    <input type="text" data-cy='address-input' className={`border-2 text-[#434343] rounded focus:outline-none focus:border-black p-1 ${errors.address ? 'border-[#FF0000]' : 'border-[#D4CFCF]'}`} {...register('address')}/>
                    {errors.address && <p className='text-[#FF0000] text-[12px] p-0 m-0 font-semibold' data-cy='address-error'>{errors.address.message}</p>}
                </motion.div>
                <motion.div className='flex gap-2 flex-col' variants={item}>
                    <p>Country</p>
                    <input type="text" data-cy='country-input' className={`border-2 text-[#434343] rounded focus:outline-none focus:border-black p-1 ${errors.country ? 'border-[#FF0000]' : 'border-[#D4CFCF]'}`} {...register('country')}/>
                    {errors.country && <p className='text-[#FF0000] text-[12px] p-0 m-0 font-semibold' data-cy='country-error'>{errors.country.message}</p>}

                </motion.div>
                <div className='flex gap-3 flex-col justify-between box-border md:flex-row'>
                    <motion.div className='flex gap-2 flex-col' variants={item}>
                        <p>City</p>
                        <input type="text" data-cy='city-input' className={`w-full text-[#434343] min-w-0 border-2 rounded focus:outline-none focus:border-black p-1 ${errors.city ? 'border-[#FF0000]' : 'border-[#D4CFCF]'}`} {...register('city')}/>
                        {errors.city && <p className='text-[#FF0000] text-[12px] p-0 m-0 font-semibold' data-cy='city-error'>{errors.city.message}</p>}

                    </motion.div>
                    <motion.div className='flex gap-2 flex-col box-border' variants={item}>
                        <p>Postal Code</p>
                        <input type="number" data-cy='postal-code-input' className={`w-full text-[#434343] min-w-0 border-2 rounded focus:outline-none focus:border-black p-1 ${errors.postalCode ? 'border-[#FF0000]' : 'border-[#D4CFCF]'}`} {...register('postalCode')}/>
                        {errors.postalCode && <p className='text-[#FF0000] text-[12px] p-0 m-0 font-semibold' data-cy='postal-code-error'>{errors.postalCode.message}</p>}
                    </motion.div>
                </div>
                <motion.button variants={item} className='bg-[#1D1D1D] text-[#FFFFFF] p-2 rounded text-center' type='submit' data-cy='paymentBtn'>Payment</motion.button>
        </form>

    </motion.div>
  )
}

export default Shipping