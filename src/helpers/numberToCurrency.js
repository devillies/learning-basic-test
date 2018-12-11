// @flow strict

export default function numberToCurrency(num: number) {
  return `Rp ${formatNumber(num)}`;
}

function formatNumber(num: number) {
  return num
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    .split('.')[0]
    .replace(/,/g, '.');
}

function formatNumberComma(num: number) {
  return num
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    .split('.')[0]
    .replace(/,/g, ',');
}

function currencyToNumber(val: string) {
  let newVal = Number(val.replace(/[^0-9]/g, ''));
  return newVal;
}
