import {
  reactExtension,
  Button,
  useSettings
  // useEmail
} from '@shopify/ui-extensions-react/checkout';
import React from 'react';

const thankYouBlock = reactExtension("purchase.thank-you.block.render", () => <Attribution />);
export { thankYouBlock };

const orderDetailsBlock = reactExtension("customer-account.order-status.block.render", () => <ProductReview />);
export { orderDetailsBlock };

function Attribution() {
  // const email = useEmail();
  const {url: ButtonUrl} = useSettings();
  return (
    <>
      <Button to='https://mm2.land/' className='custom-button'>CLAIM ORDER</Button>
    </>
  );
}

function ProductReview() {
  // const email = useEmail();
  const {url: buttonurl} = useSettings();
  const url = buttonurl ?? 'https://mm2.land/';
  return (
    <>
      <Button to={url} className='custom-button'>CLAIM ORDER</Button>
    </>
  );
}
