Object.deepFreeze = function(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  Object.freeze(obj);
  Object.keys(obj).forEach((key) => {
    if (obj[key] && typeof obj[key] === 'object') {
      Object.deepFreeze(obj[key]);
    }
  });

  return obj;
};
