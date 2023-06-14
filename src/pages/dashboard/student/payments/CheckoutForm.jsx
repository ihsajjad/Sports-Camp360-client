import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";


const CheckoutForm = ({ item }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [cardError, setCardError] = useState('');
    const { user } = useContext(AuthContext);
    const [processing, setProcessing] = useState(false);

    const {price, name, _id, classId} = item;

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
        } else {
            setCardError('');
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'Anonymous',
                        email: user?.email || 'Unknown'
                    }
                }
            }
        );

        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent);
        setProcessing(false);

        if (paymentIntent?.status === "succeeded") {
            const transitionId = paymentIntent.id;
            if (transitionId) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your Payment Is Successful',
                    showConfirmButton: false,
                    timer: 1500
                })

                // Payment date calculation
                const dateCalculation = new Date(paymentIntent.created * 1000);

                const options = {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                  };

                const date = dateCalculation.toLocaleDateString('en-GB', options);

                // Payment data
                const payment = {
                    email: user?.email,
                    transitionId,
                    price,
                    classId : _id,
                    name,
                    date
                } 

                // Save payment data to the server
                axiosSecure.post('/payments', {payment})

                // Delete class from selected class
                axiosSecure.delete(`/selected/${_id}`)

                axiosSecure.patch(`/classes/updateSeats/${classId}`)
            }
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="card w-96 h-60 bg-[#3ec5c75e] border-2 border-[#3ec5c7de] shadow-xl p-4 space-y-10" onSubmit={handleSubmit}>
                <div className="w-full flex justify-between text-2xl text-[#248b8cf5]">
                    <h3>{`You are paying $${price} dollars for ${name} Class`}</h3>
                </div>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#248b8cf5',
                                '::placeholder': {
                                    color: '#248b8cf5',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn border-[#248b8cf5] bg-[#248a8c65] hover:bg-[#106d6ffa] text-white border-2 btn-sm mt-5" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 text-center">{cardError}</p>}
        </div>
    );
};

export default CheckoutForm;