const formatValue = (value: number): string => {
  const money = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return money;
};

export default formatValue;
