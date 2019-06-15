function validateRecipient(value) {
  function emailREX() {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg;
  }

  function validateRecipientinArr(ele) {
    if (!ele) {
      // Empty ele
      return 1;
    }
    if (ele.indexOf(',') > -1) {
      // Long String
      const result = ele
        .split(',')
        .map(email => email.trim())
        .every(email => {
          if (!emailREX().test(email)) {
            return false;
          }
          return true;
        });
      return result || 2;
    }
    // Single String
    if (!emailREX().test(ele)) {
      return 3;
    }
  }

  let error;
  switch (validateRecipientinArr(value)) {
    case 1:
      error = 'Required';
      break;
    case 2:
      error = 'Invalid email address in list';
      break;
    case 3:
      error = 'Invalid email address';
      break;
    default:
      error = null;
      break;
  }
  return error;
}

function validateTitle(value) {
  let error;
  if (!value) {
    error = 'Required';
  }
  return error;
}

function validateSubject(value) {
  let error;
  if (!value) {
    error = 'Required';
  }
  return error;
}

function validateBody(value) {
  let error;
  if (!value) {
    error = 'Required';
  }
  return error;
}

export { validateRecipient, validateTitle, validateSubject, validateBody };
