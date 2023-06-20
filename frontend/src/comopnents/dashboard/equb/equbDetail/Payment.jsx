import React from "react";

const Payment = () => {
  return (
    <div>
      <form action="/api/pay" method="post">
        <div className="form-group ml-[20%] mt-36">
          <button type="submit">Submit CHECKOUT</button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
