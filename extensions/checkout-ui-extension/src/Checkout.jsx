import {
  reactExtension,
  Button,
  useSettings,
  useEmail,
  useApi
} from '@shopify/ui-extensions-react/checkout';
import React from 'react';

const thankYouBlock = reactExtension("purchase.thank-you.block.render", () => <ExtensionThankuRender />);
export { thankYouBlock };

const orderDetailsBlock = reactExtension("customer-account.order-status.block.render", () => <ExtensionOrderRender />);
export { orderDetailsBlock };

function ExtensionThankuRender() {
  const data= useApi();
  const email = useEmail();
  let orderId = data.orderConfirmation.current.order.id;
  orderId= orderId.match(/(\d+)$/)[0]; 
  const {url: buttonurl} = useSettings();
  const baseUrl = buttonurl ?? 'https://claim.mm2.land/';
  const url = `${baseUrl}?order=${orderId}&email=${email}`;
  return (
    <>
      <Button to={url} className='custom-button'>CLAIM ORDER</Button>
    </>
  );
}

function ExtensionOrderRender() {
  const email = useEmail();
  const data = useApi();
  let orderId = data.order.current.id;
  orderId= orderId.match(/(\d+)$/)[0]; 
  const {url: buttonurl} = useSettings();
  const baseUrl = buttonurl ?? 'https://claim.mm2.land/';
  const url = `${baseUrl}?order=${orderId}&email=${email}`;
  return (
    <>
      <Button to={url} className='custom-button'>CLAIM ORDER</Button>
    </>
  );
}
