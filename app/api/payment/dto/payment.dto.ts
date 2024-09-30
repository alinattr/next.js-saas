import YooKassa from 'yookassa'
import { PaymentStatusDto } from './dto/payment-status.dto'
import { PaymentDto } from './dto/payment.dto'

const yooKassa = new YooKassa({
    shopId: process.env['SHOP_ID'],
    secretKey: process.env['PAYMENT_TOKEN']
})