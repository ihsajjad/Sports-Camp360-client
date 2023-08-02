import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const location = useLocation();
  const item = location.state.item;

  return (
    <div className="w-full">
      <Elements stripe={stripePromise}>
        <CheckoutForm item={item} />
      </Elements>
    </div>
  );
};

export default Payment;
