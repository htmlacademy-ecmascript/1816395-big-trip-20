import dayjs from 'dayjs';
import { CONST_COMMON_DATA } from '../const/common-const';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const commonUtil = {
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
      const
        start = tripPoint.dateFrom,
        end = tripPoint.dateTo;

      const periodExtension = dayjs.duration(dayjs(end) - dayjs(start), 'millisecond');

      if (periodExtension.asMilliseconds() >= CONST_COMMON_DATA.secondsInDay) {
        return periodExtension.format(CONST_COMMON_DATA.formatDateDaysHoursMinutes);
      } else {
        if (periodExtension.asMilliseconds() >= CONST_COMMON_DATA.secondsInHour) {
          return periodExtension.format(CONST_COMMON_DATA.formatDateHoursMinutes);
        } else {
          return periodExtension.format(CONST_COMMON_DATA.formatDateMinutes);
        }
      }

    }
  },

  getDestinationNames: function (destinationList) {
    const destinationNames = destinationList.map((destination) => destination.name);
    return destinationNames;
  },

};

export { commonUtil };
