import { useActionData } from "react-router-dom";

function OrderConfirmation() {
  const orderStatus = useActionData();

  return (
    <section className="">
      <div className="checkout-confirmation">
        <h1>Order Confirmed!</h1>
        <p>Order ID: {orderStatus.id}</p>
      </div>
    </section>
  );
}

export default OrderConfirmation;
