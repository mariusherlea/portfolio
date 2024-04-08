'use client';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  'pk_test_51P3BnWP88dOV6Kdb5NEqV37hRd7RvkqiQxleutwDOcM6PvqGeR6ejLFgSQasQYB5FlJ062qUZMajZypJdWrvCTO300NGFfngvD'
);

const Checkout = ({ totalCost }) => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch('/api/checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ totalCost }),
    });
    const session = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // Handle error
    }
  };

  return <button onClick={handleCheckout}>Checkout</button>;
};

const Page = () => {
  return (
    <div>
      {/* Your existing components */}
      <Checkout totalCost={totalCost} />
    </div>
  );
};

export default Page;
