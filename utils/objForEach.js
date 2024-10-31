Object.prototype.forEach = function(callback) {
  if (typeof callback !== 'function') return;
  Object.keys(this).forEach(key => {
    callback(key,this[key]);
  })
}
