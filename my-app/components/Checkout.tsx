'use client'
import React, {useState} from 'react'
import CheckoutHeader from './CheckoutHeader'
import InfoWrapper from './InfoWrapper'
import {NavProps} from '@/lib/constant' 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()


const Checkout = () => {

  const [navbarTitle, setNavbarTitle] = useState<NavProps>('Shipping')

  return (
    <section className='w-[100%] sm:w-[60%] sm:max-w-[500px] bg-white border-2 border-solid border-[#D4CFCF] rounded-md flex flex-col gap-2 h-fit'>
        <CheckoutHeader navbarTitle={navbarTitle}/>

        <QueryClientProvider client={queryClient}>
            <InfoWrapper navbarTitle={navbarTitle} setNavbarTitle={setNavbarTitle}/>
        </QueryClientProvider>

    </section>
  )
}

export default Checkout