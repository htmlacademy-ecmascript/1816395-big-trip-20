const util = {
  getUniqId: function () {
    const random = Math.random();
    return random.toString(16).substring(2);
  },


};

export { util };

