import { CONST_DATA } from '../mock/const-data.js';

const util = {
  getUniqId: function () {
    const random = Math.random();
    return random.toString(16).substring(2);
  },
  getRandomPrice: function () {
    return Math.floor(Math.random() * 10000 * Math.random());
  },
  getRandomDate: function () {
    const
      start = new Date(CONST_DATA.years[0], 0, 1),
      end = new Date(CONST_DATA.years[1], 0, 1);
    return new Date(start.getTime()
      + Math.random() * (end.getTime() - start.getTime()));
  }

};

export { util };

