Object.prototype.deepFreeze = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach((key) => {
    if (obj[key] && typeof obj[key] === 'object') {
      deepFreeze(obj[key]);
    }
  });
};
