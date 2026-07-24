import type { APIRoute } from 'astro';

const HELCIM_API_URL = 'https://api.helcim.com/v2/helcim-pay/initialize';
const HELCIM_API_TOKEN = import.meta.env.HELICM_API_TOKEN || '';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { amount, currency = 'USD' } = body;

    if (!HELCIM_API_TOKEN) {
      return new Response(
        JSON.stringify({ error: 'Helcim API token not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const response = await fetch(HELCIM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-token': HELCIM_API_TOKEN,
      },
      body: JSON.stringify({
        paymentType: 'purchase',
        amount: amount,
        currency: currency,
        paymentFees: false,
        customerCode: '',
        invoiceNumber: '',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: data.message || 'Helcim initialization failed' }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        checkoutToken: data.checkoutToken,
        secretToken: data.secretToken,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Failed to initialize Helcim payment' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
