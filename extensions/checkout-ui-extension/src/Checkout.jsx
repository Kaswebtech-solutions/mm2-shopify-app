import {
  reactExtension,
  Button,
  useSettings
  // useEmail
} from '@shopify/ui-extensions-react/checkout';
import React from 'react';

const thankYouBlock = reactExtension("purchase.thank-you.block.render", () => <ExtensionRender />);
export { thankYouBlock };

const orderDetailsBlock = reactExtension("customer-account.order-status.block.render", () => <ExtensionRender />);
export { orderDetailsBlock };

function ExtensionRender() {
  // const email = useEmail();
  const {url: buttonurl} = useSettings();
  const url = buttonurl ?? 'https://mm2.land/';
  return (
    <>
      <Button to={url} className='custom-button'>CLAIM ORDER</Button>
    </>
  );
}
