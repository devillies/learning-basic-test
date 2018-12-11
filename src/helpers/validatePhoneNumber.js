// @flow strict

const PHONE_NUMBER_REGEX = /^08\d{8,11}$/;

export default function validatePhoneNumber(phoneNumber: string): boolean {
  return PHONE_NUMBER_REGEX.test(phoneNumber);
}
