import dayjs from 'dayjs';
import { CONST_DATA } from '../src/mock/const-data.js';

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
    return dayjs(
      new Date(start.getTime()
        + Math.random() * (end.getTime() - start.getTime()))
    ).format(CONST_DATA.formatDate);
  },

  getRandomBooleanValue: function () {
    return CONST_DATA.booleanValue[Math.floor(Math.random) * CONST_DATA.booleanValue.length];
  },

  getRandomArrayElement: function (array) {
    return array[Math.floor(Math.random() * array.length)];
  },


};

const getRandomPeriod = () => {
  const period = [];
  period.push(util.getRandomDate());
  let endPeriod = util.getRandomDate();
  while (dayjs(period[0]).isAfter(endPeriod)) {
    endPeriod = util.getRandomDate();
  }
  period.push(endPeriod);
  return period;

};


export { util, getRandomPeriod };

