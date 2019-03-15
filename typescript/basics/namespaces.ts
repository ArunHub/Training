namespace PaymentUtility {
    export function cashPayment(customerId: number, orderId: number, invoiceAmt: number): string {
        return `
        customer id: ${customerId}
        for Id: ${orderId}
        has paid amount: ${invoiceAmt}
        `;  
    }

    export namespace OnlinePayment{
        export function cartPayment(cartId: number, cartType: string, invoiceAmt: number): string {
            return `
            payment id: ${cartId}
            of type: ${cartType}
            has paid amount INR: ${invoiceAmt}
            `;  
        }
    }
}

console.log(PaymentUtility.cashPayment(2323, 89898, 23000)+'/n');
console.log(PaymentUtility.OnlinePayment.cartPayment(1231,"VISA", 9000))