import {
  reactExtension,
  Button,
  useEmail
} from '@shopify/ui-extensions-react/checkout';
import React, { useState } from 'react';
import './styles/style.css';

const thankYouBlock = reactExtension("purchase.thank-you.block.render", () => <Attribution />);
export { thankYouBlock };

const orderDetailsBlock = reactExtension("customer-account.order-status.block.render", () => <ProductReview />);
export { orderDetailsBlock };

function Attribution() {
  const email = useEmail();
  console.log(email);

  return (
    <>
      <Button to='https://mm2.land/' className='custom-button'>CLAIM ORDER</Button>
    </>
  );
}

function ProductReview() {
  const email = useEmail();
  console.log(email);

  return (
    <>
      <Button to='https://mm2.land/' className='custom-button'>CLAIM ORDER</Button>
    </>
  );
}
