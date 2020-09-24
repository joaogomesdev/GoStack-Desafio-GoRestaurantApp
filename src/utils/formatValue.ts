const formatValue = (value: number): string =>
Intl.NumberFormat('pt-PT', {
  style: 'currency',
  currency: 'EUR'
}).format(value);

export default formatValue;
