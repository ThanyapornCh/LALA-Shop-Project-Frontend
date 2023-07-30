// import Script from 'react-load-script';

// const mypayment = {
//   publicKey: process.env.REACT_APP_OMISE_PUBLIC_KEY,
//   other: process.env.REACT_APP_ENDPOINT_URL,
// };
// let OmiseCard;

export default function CheckoutCreditCardForm({ onSuccess }) {
  // const handleLoadScript = () => {
  //   OmiseCard = window.OmiseCard;
  //   OmiseCard.configure({
  //     publicKey: process.env.REACT_APP_OMISE_PUBLIC_KEY,
  //     frameLabel: 'LALA shop',
  //     submitLabel: 'Pay now',
  //     currency: 'THB',
  //     buttonLabel: 'Pay with Omise',
  //   });
  // };

  // const creditCardConfigure = () => {
  //   OmiseCard.configure({
  //     defaultPaymentMethod: 'credit_card',
  //     otherPaymentMethods: [],
  //   });
  //   OmiseCard.configureButton('#credit-card');
  //   OmiseCard.attach();
  // };

  // const omiseCardHandler = () => {
  //   OmiseCard.open({
  //     amount: 10000,

  //     onCreateTokenSuccess: token => {
  //       console.log(token);
  //       /* Handler on token or source creation.  Use this to submit form or send ajax request to server */
  //     },
  //     onFormClosed: () => {},
  //   });
  // };
  // const handleClickPay = e => {
  //   e.preventDefault();
  //   creditCardConfigure();
  //   onSuccess();
  //   omiseCardHandler();
  // };

  return (
    <>
      {/* <Script url="https://cdn.omise.co/omise.js" onLoad={handleLoadScript} /> */}

      <form>
        <button
          id="credit-card"
          className="p-2 border-black/50 bg-slate-300"
          type="button"
        >
          Checkout
        </button>
      </form>
    </>
  );
}
