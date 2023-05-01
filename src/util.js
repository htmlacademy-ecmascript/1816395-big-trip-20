const util = {
  getUniqId: function () {
    const random = Math.random();
    return random.toString(16).substring(2);
  },
  getRandomPrice: function () {
    return Math.floor(Math.random() * 10000 * Math.random());
  }

};

export { util };

