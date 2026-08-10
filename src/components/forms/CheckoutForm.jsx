import { Form, useNavigation } from "react-router-dom";

function CheckoutForm({ cart }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form method="POST">
      <label>
        Full name
        <input type="text" name="fullName" required />
      </label>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Shipping address
        <input type="text" name="address" required />
      </label>
      <label>
        Card number
        <input type="text" name="cardNumber" required maxLength={16} />
      </label>
      <label>
        <input
          type="hidden"
          name="order"
          id="order"
          value={JSON.stringify(cart)}
        />
      </label>
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "Placing Order..." : "Place Order"}
      </button>
    </Form>
  );
}

export default CheckoutForm;
