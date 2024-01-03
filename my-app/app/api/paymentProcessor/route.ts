import { NextRequest, NextResponse } from 'next/server';


export async function POST(request: NextRequest) {
    const { payment } = await request.json()

    //just for testing purposes : 
    if(payment?.cardNumber === '4242 4242 4242 4000'){
        return NextResponse.json({status: 400, processed: false, reason: 'Invalid card, please update your card'}, {status: 400, statusText: 'Invalid card, please update your card'})
    }
    return NextResponse.json({status: 200, processed: true}, {status: 200, statusText: 'OK'})
}