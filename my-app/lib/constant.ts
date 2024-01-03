import * as yup from 'yup'


export type NavProps = 'Shipping' | 'Payment'


export type FormValues = {
    address : string,
    country : string,
    city : string,
    postalCode : string
}

export type PaymentValues = {
    email : string,
    name : string,
    cardNumber : string,
    exp : string,
    cvc : string
}

export const addressSchema = yup.object().shape({
    address : yup.string().required('Please provide your address as it is a mandatory field.').matches(/^[^<>]*$/, 'Please provide a plain text').max(250, 'Address must be less than 250 characters'),
    country : yup.string().required('Please provide your country as it is a mandatory field.').matches(/^[^<>]*$/, 'Please provide a plain text').max(50, 'Country must be less than 50 characters'),
    city : yup.string().required('City is required').matches(/^[^<>]*$/, 'Please provide a plain text').max(50, 'City must be less than 50 characters'),
    postalCode : yup.string().required('Postal code is required').typeError('Postal code must be a number').matches(/^[0-9]{1,7}$/, 'Postal code must be between 1 and 7 digits')
})

export const paymentSchema = yup.object().shape({
    email : yup.string().required('Please provide your email as it is a mandatory field.').email('Please provide a valid email.').max(50, 'Email must be less than 50 characters'),
    name : yup.string().required('Please provide your name as it is a mandatory field.').matches(/^[^<>]*$/, 'Please provide a plain text').max(40, 'Name must be less than 40 characters'),
    cardNumber : yup.string().required('Please provide your card number as it is a mandatory field.').matches(/^[^<>]*$/, 'Please provide a plain text').max(21, 'Card number must be less than 21 characters').min(16, 'Card number must be more than 16 characters'),
    exp : yup.string().required('Expiration date is required').matches(/^[^<>]*$/, 'Please provide a plain text').max(5, 'City must be less than 4 characters'),
    cvc : yup.string().required('CVC is required').typeError('CVC must be a number').matches(/^[0-9]{3}$/, 'CVC must be between 3 digits')
})

export type Product = {
    productId: string;
    name: string;
    quantity: number;
    price: string;
  };

export type Order = {
    items: Product[];
    totalPrice: string;
  };

export type Customer = {
    name?: string;
    email?: string;
    address?: string;
  };

export type PaymentMethod = {
    type: string;
    cardNumber: string;
    expirationDate: string;
    cvc: string;
  };

export type Data = {
    order: Order;
    customer?: Customer;
    paymentMethod?: PaymentMethod;
  };

export const items = [
    {
        productId: '1',
        name: 'Nike Boys Sportswear Futura Hooded',
        src:'/318281679980_01.webp',
        quantity: 1,
        price: '45$',
      },
      {
        productId: '2',
        name: 'Nike Nba J.Morant Grizzlies Swingman',
        src:'/318588621028_01.webp',
        quantity: 1,
        price: '60$',
      },
]

const itemWithoutSrc = items.map(({src, ...item}) => item)

export const itemsPurchased = {
    items: itemWithoutSrc,
    totalPrice: '115$'
};

export type ShippingProps = {
  setNavbarTitle: React.Dispatch<React.SetStateAction<NavProps>>,
  setData: React.Dispatch<React.SetStateAction<Data>>
}

export type PaymentProps = {
  setData: React.Dispatch<React.SetStateAction<Data>>,
  data: Data
}

export const domain = 'http://localhost:3000'

export interface PaymentResponse  {
  status: string;
  processed: boolean;
  reason?: string;
}

export const Var = {
  start:{
      opacity:0,
      y:-50
  },
  end: {
      opacity:1,
      y:0,
      transition:{
          delayChildren: 0.2,
          staggerChildren: 0.1,
      }
  }
}

export const item = {
  start: { y: -15, opacity: 0 },
  end: {
    y: 0,
    opacity: 1
  }
}