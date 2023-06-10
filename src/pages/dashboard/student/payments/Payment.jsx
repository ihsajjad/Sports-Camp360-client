import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const location = useLocation();
    const price = location.state.price;
    const classId = location.state.classId;
    const name = location.state.name;
    
    return (
        <div className="w-full">
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} classId={classId} name={name}/>
            </Elements>
        </div>
    );
};

export default Payment;