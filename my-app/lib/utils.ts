import {domain, Data, PaymentResponse} from './constant'


// : Promise<PaymentResponse>
export const processPayment =  async (data : Data) : Promise<PaymentResponse> => {

    const response = await fetch(`${domain}/api/paymentProcessor`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })

    if(!response.ok) {
        throw new Error(response.statusText)
    }

    return await response.json()
}