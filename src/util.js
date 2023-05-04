import dayjs from 'dayjs';
import { CONST_DATA } from '../src/mock/const-data.js';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

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
    return CONST_DATA.booleanValue[Math.floor(Math.random() * CONST_DATA.booleanValue.length)];
  },

  getRandomArrayElement: function (array) {
    return array[Math.floor(Math.random() * array.length)];
  },

  getRandomCount: function (countLimit) {
    let count = Math.floor(Math.random() * countLimit);
    while (!count) {
      count = Math.floor(Math.random() * countLimit);
    }
    return count;
  },

  getDestinationNames: function (destinationList) {
    const destinationNames = destinationList.map((destination) => destination.name);
    return destinationNames;
  },

  humanizeDateInfo: function (date) {
    return date ? dayjs(date).format(CONST_DATA.formatDateInfo) : '';
  },

  humanizeDatePoint: function (date) {
    return date ? dayjs(date).format(CONST_DATA.formatDatePoint) : '';
  },

  getDestinationById: function (destinationId, destinationList) {
    const findDestination = destinationList.find((element) => element.id === destinationId);
    return findDestination.name;
  },

  getOffersById: function (typeTripPoint, tripPointOffers, offersList) {
    const currentOffers = offersList.find((offers) => offers.type === typeTripPoint);
    const offersById = [];
    for (const offers of currentOffers.offers) {
      tripPointOffers[0].forEach((offer) => {
        if (offer === offers.id) {
          offersById.push(offers);
        }
      });
    }
    return offersById;
  },

  getPeriodExtension: (tripPoint) => {
    const
      start = tripPoint.dateFrom,
      end = tripPoint.dateTo;

    const gap = dayjs.duration(dayjs(end) - dayjs(start), 'millisecond');
    return gap.format('DD[d] HH[h] MM[m]');
  }


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

