export default function PaymentForm() {
  return (
    <>
      <form action="https://api.globalprimepay.com/v3/qrcode" method="POST">
        <input type="hidden" name="token" value="{token}" />
        <input type="hidden" name="referenceNo" value="230717175558390" />
        <input type="hidden" name="backgroundUrl" value="{backgroundUrl}" />
        <input
          type="number"
          name="amount"
          maxlength="13"
          placeholder="Amount"
          value="1.00"
        />
        <br />
        <input id="button" type="submit" value="Pay Now" />
      </form>
    </>
  );
}
