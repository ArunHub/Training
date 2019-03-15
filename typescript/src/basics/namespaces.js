var PaymentUtility;
(function (PaymentUtility) {
    function cashPayment(customerId, orderId, invoiceAmt) {
        return "\n        customer id: " + customerId + "\n        for Id: " + orderId + "\n        has paid amount: " + invoiceAmt + "\n        ";
    }
    PaymentUtility.cashPayment = cashPayment;
    var OnlinePayment;
    (function (OnlinePayment) {
        function cartPayment(cartId, cartType, invoiceAmt) {
            return "\n            payment id: " + cartId + "\n            of type: " + cartType + "\n            has paid amount INR: " + invoiceAmt + "\n            ";
        }
        OnlinePayment.cartPayment = cartPayment;
    })(OnlinePayment = PaymentUtility.OnlinePayment || (PaymentUtility.OnlinePayment = {}));
})(PaymentUtility || (PaymentUtility = {}));
console.log(PaymentUtility.cashPayment(2323, 89898, 23000) + '/n');
console.log(PaymentUtility.OnlinePayment.cartPayment(1231, "VISA", 9000));
//# sourceMappingURL=namespaces.js.map