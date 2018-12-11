// @flow strict

export default function formatUrlEncoded(input: {
  [string]: string | number | boolean,
}) {
  return Object.keys(input)
    .map(key => {
      let pureValue;
      let pureKey = encodeURIComponent(key);
      if (Array.isArray(input[key])) {
        return input[key]
          .map(value => {
            pureValue = encodeURIComponent(value);
            return pureKey + '[]=' + pureValue;
          })
          .join('&');
      } else {
        pureValue = encodeURIComponent(input[key].toString());
        return pureKey + '=' + pureValue;
      }
    })
    .join('&');
}
