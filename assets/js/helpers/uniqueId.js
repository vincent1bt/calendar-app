const uniqueId = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
};

export default uniqueId;
