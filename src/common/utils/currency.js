export function formatPrice(price, currency = 'KES') {
  if (isNaN(price)) {
    throw new Error('Invalid price. Please provide a number.');
  }

  const formattedPrice = price.toLocaleString('en-US');

  return `${currency} ${formattedPrice}`;
}
