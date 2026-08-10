// import {getOrderById}

export async function loader({ params }) {
  // const id=await
  const order = await getOrderById(params.orderId);

  if (!order) {
    // Covers refreshing after the session storage has been cleared, or
    // someone hitting this URL with a made-up order id.
    throw new Response("Order not found", { status: 404 });
  }

  return order;
}
