import React from 'react'
import Checkout from './Checkout'
import Summary from './Summary'


const Container = () => {
  return (
    <section className='p-2 mt-8 flex flex-col gap-3 justify-between max-w-screen-lg mx-auto sm:flex-row'>
        <Checkout/>
        <Summary/>
    </section>
  )
}

export default Container