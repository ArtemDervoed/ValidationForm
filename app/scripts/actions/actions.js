export const SEND = 'SEND';

export const sendForm = (form) => {
  return {
    type: SEND,
    form
  }
}
