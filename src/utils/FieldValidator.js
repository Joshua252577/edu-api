const fieldValidator = (body = {}, validFields = []) => {
  const attrs = Object.keys(body);

  const invalidFields = [];
  attrs.forEach(attr => {
    if (!validFields.includes(attr)) {
      invalidFields.push(attr)
    }
  });

  return invalidFields;
}

module.exports = fieldValidator;