import React, { useEffect, useState } from 'react'
import {useForm, Controller} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { paymentSchema, PaymentValues, PaymentProps, item, Var } from '@/lib/constant'
import Cleave from 'cleave.js/react'
import { useMutation } from '@tanstack/react-query'
import { processPayment } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import {motion } from 'framer-motion'

const Payment = ({setData , data} : PaymentProps) => {

  const router = useRouter()

  const [shouldPerformTransaction, setShouldPerformTransaction] = useState(false);

    const {register, handleSubmit, formState : {errors}, control} = useForm<PaymentValues>({resolver : yupResolver(paymentSchema)})

    const {mutateAsync : transaction, isPending, isError, error} = useMutation({
      mutationFn: processPayment,
    })

    const submitForm = async (CardData : PaymentValues) => {
        const {email, name, cardNumber, exp, cvc} = CardData
        setData(prev => ({...prev, customer:{...prev.customer,email: email,name: name}, payment:{cardNumber: cardNumber, exp: exp, cvc: cvc}}))
        setShouldPerformTransaction(true)
    }

    useEffect(() => {
      if (shouldPerformTransaction) {
        const performTransaction = async () => {
          const a = await transaction(data)
          if(a.processed){
            router.push('/success')
          }
          setShouldPerformTransaction(false)
        };
    
        performTransaction();
      }
    }, [shouldPerformTransaction, data])

    if(isError){
      return (
          <div data-cy='error-container' className='text-[#FF0000] bg-[#FFE4F0] p-4 rounded w-full text-center flex flex-col gap-3'>
            <p>Something went wrong, retry again! {error?.message}</p>
            <button className='text-[#ffffff] bg-[#FF0000] px-3 py-1 rounded'>retry</button>
          </div>
      )
    }


  return (
    <motion.div variants={Var} initial='start' animate='end' className='box-border flex gap-3 flex-col text-[14px]' data-cy='paymentContainer'>
        <motion.h3 variants={item}>Payment</motion.h3>

        <motion.p variants={item} className='text-[#828282] text-[14px]'>All transactions are secure and encrypted, enter your credit or debit card</motion.p>

        <form className='flex gap-3 flex-col text-[#828282]' onSubmit={handleSubmit(submitForm)}>
                <motion.div variants={item} className='flex gap-2 flex-col'>
                    <p>Email</p>
                    <input type="text" data-cy='email-input' className={`border-2 text-[#434343] rounded focus:outline-none focus:border-black p-1 ${errors.email ? 'border-[#FF0000]' : 'border-[#D4CFCF]'}`} {...register('email')}/>
                    {errors.email && <p data-cy='email-error' className='text-[#FF0000] text-[12px] p-0 m-0 font-semibold'>{errors.email.message}</p>}
                </motion.div>
                <motion.div variants={item} className='flex gap-2 flex-col'>
                    <p>Name on Card</p>
                    <input type="text" data-cy='card-name-input' className={`border-2 text-[#434343] rounded focus:outline-none focus:border-black p-1 ${errors.name ? 'border-[#FF0000]' : 'border-[#D4CFCF]'}`} {...register('name')}/>
                    {errors.name && <p data-cy='card-name-error' className='text-[#FF0000] text-[12px] p-0 m-0 font-semibold'>{errors.name.message}</p>}
                </motion.div>
                <motion.div variants={item} className='flex gap-2 flex-col'>
                    <p>Card Number</p>
                    <Controller
                              name="cardNumber"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <Cleave
                                  {...field}
                                  data-cy='card-number-input'
                                  className={`border-2 rounded focus:outline-none text-[#434343] focus:border-black p-1 ${errors.cardNumber ? 'border-[#FF0000]' : 'border-[#D4CFCF]'}`}
                                  options={{ creditCard: true }}
                                />
                              )}
                            />
                    {errors.cardNumber && <p data-cy='card-number-error' className='text-[#FF0000] text-[12px] p-0 m-0 font-semibold'>{errors.cardNumber.message}</p>}
                </motion.div>
                <div className='flex gap-3 flex-col justify-between box-border md:flex-row'>
                    <motion.div variants={item} className='flex gap-2 flex-col'>
                        <p>Expiration date</p>

                        <Controller
                              name="exp"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <Cleave
                                  {...field}
                                  data-cy='exp-input'
                                  className={`w-full min-w-0 border-2 text-[#434343] rounded focus:outline-none focus:border-black p-1 ${errors.exp ? 'border-[#FF0000]' : 'border-[#D4CFCF]'}`}
                                  options={{ date: true, datePattern: ['m', 'y'] }}
                                />
                              )}
                            />
                        {errors.exp && <p data-cy='exp-error' className='text-[#FF0000] text-[12px] p-0 m-0 font-semibold'>{errors.exp.message}</p>}

                    </motion.div>
                    <motion.div variants={item} className='flex gap-2 flex-col box-border'>
                        <p>CVC</p>

                        <Controller
                                name="cvc"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                  <Cleave
                                    {...field}
                                    data-cy='cvc-input'
                                    className={`border-2 rounded text-[#434343] focus:outline-none focus:border-black p-1 ${errors.cvc ? 'border-[#FF0000]' : 'border-[#D4CFCF]'}`}
                                    options={{blocks: [3] }}
                                  />
                                )}
                              />

                        {errors.cvc && <p data-cy='cvc-error' className='text-[#FF0000] text-[12px] p-0 m-0 font-semibold'>{errors.cvc.message}</p>}
                    </motion.div>
                </div>
                <motion.button variants={item} className='bg-[#1D1D1D] text-[#FFFFFF] p-2 rounded text-center text-[14px]' type='submit' data-cy='payBtn'>{isPending ? 'Processing...' : 'Pay'}</motion.button>
        </form>

    </motion.div>
  )
}

export default Payment