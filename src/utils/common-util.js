import dayjs from 'dayjs';
import { CONST_COMMON_DATA } from '../const/common-const.js';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const commonUtil = {
  dateIsFuture: function (date) {
    return date ? dayjs(date).isAfter(dayjs()) : false;
  },

  dateIsPast: function (date) {
    return date ? dayjs(date).isBefore(dayjs()) : false;
  },

  dateIsPresent: function (date) {
    return date ? dayjs(date).format(CONST_COMMON_DATA.formatDateOneDay) === dayjs().format(CONST_COMMON_DATA.formatDateOneDay) : false;
  },

  humanizeDateInfo: function (date) {
    return date ? dayjs(date).format(CONST_COMMON_DATA.formatDateInfo) : '';
  },

  humanizeDatePoint: function (date) {
    return date ? dayjs(date).format(CONST_COMMON_DATA.formatDatePoint) : '';
  },

  humanizeDateEditPoint: function (date) {
    return dayjs(date).format(CONST_COMMON_DATA.formatDateAddPoint);
  },

  getPeriodExtension: function (tripPoint) {
    if (tripPoint) {
      const start = tripPoint.dateFrom;
      const end = tripPoint.dateTo;


      const periodExtension = dayjs(end).diff(dayjs(start));
      let pointDuration = 0;

      switch (true) {
        case (periodExtension >= CONST_COMMON_DATA.secondsInDay):
          pointDuration = dayjs.duration(periodExtension).format(CONST_COMMON_DATA.formatDateDaysHoursMinutes);
          break;
        case (periodExtension >= CONST_COMMON_DATA.secondsInHour):
          pointDuration = dayjs.duration(periodExtension).format(CONST_COMMON_DATA.formatDateHoursMinutes);
          break;
        case (periodExtension < CONST_COMMON_DATA.secondsInHour):
          pointDuration = dayjs.duration(periodExtension).format(CONST_COMMON_DATA.formatDateMinutes);
          break;
      }

      return pointDuration;
    }
  },

  getDestinationNames: function (destinationList) {
    const destinationNames = destinationList.map((destination) => destination.name);
    return destinationNames;
  },

  getSumOfValues: function (values) {
    return values.reduce((acc, number) => acc + number, 0);
  },

  updateTripPoint: function (tripPoints, pointUpdate) {
    return tripPoints.map((tripPoint) => tripPoint.id === pointUpdate.id ? pointUpdate : tripPoint);
  },

  getPointsDateDifference: function (firstPoint, secondPoint) {
    return new Date(firstPoint.dateFrom) - new Date(secondPoint.dateFrom);
  },

  getPointsDurationDifference: function (firstPoint, secondPoint) {
    const firstDuration = new Date(firstPoint.dateTo) - new Date(firstPoint.dateFrom);
    const secondDuration = new Date(secondPoint.dateTo) - new Date(secondPoint.dateFrom);

    return secondDuration - firstDuration;
  },

  getPointsPriceDifference: function (firstPoint, secondPoint) {
    return secondPoint.basePrice - firstPoint.basePrice;
  },

  getCapitalize: function (str) {
    return str[0].toUpperCase() + str.slice(1);
  }

};

export { commonUtil };
