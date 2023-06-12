import dayjs from 'dayjs';
import { CONST_MOCK_DATA } from '../const/mock-const.js';
import { CONST_COMMON_DATA } from '../const/common-const.js';


const mockUtil = {
  getUniqId: function () {
    const random = Math.random();
    return random.toString(16).substring(2);
  },

  getRandomPrice: function () {
    return Math.floor(Math.random() * 10000 * Math.random());
  },

  getRandomDate: function () {
    const start = new Date(CONST_MOCK_DATA.years[0], 0, 1);
    const end = new Date(CONST_MOCK_DATA.years[1], 0, 1);

    const randomDate = dayjs(
      new Date(start.getTime()
        + Math.random() * (end.getTime() - start.getTime()))
    )
      .format(CONST_COMMON_DATA.formatDate);
    return randomDate;
  },

  getRandomBooleanValue: function () {
    return CONST_MOCK_DATA.booleanValue[Math.floor(Math.random() * CONST_MOCK_DATA.booleanValue.length)];
  },

  getRandomValue: function (array) {
    return array[Math.floor(Math.random() * array.length)];
  },

  getRandomCount: function (countLimit) {
    let count = Math.floor(Math.random() * countLimit);
    while (!count) {
      count = Math.floor(Math.random() * countLimit);
    }
    return count;
  },

  getRandomPeriod: function () {

    const isDateAfter = function (firstDate, secondDate) {
      return dayjs(firstDate).isAfter(secondDate);
    };

    const isExtensionLimit = function (firstDate, SecondDate) {
      return dayjs(firstDate).diff(SecondDate) < CONST_MOCK_DATA.millisecondsInMonth;
    };
    const period = [];
    period.push(mockUtil.getRandomDate());
    let endPeriod = mockUtil.getRandomDate();


    while (isDateAfter(period[0], endPeriod) ) {
      console.log('+')
      endPeriod = mockUtil.getRandomDate();
    }
    period.push(endPeriod);
    return period;

  },

  getRandomData: function (data) {
    return data.slice(0, this.getRandomCount(data.length));
  }
};

export { mockUtil };
