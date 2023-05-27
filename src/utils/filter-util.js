import { CONST_COMMON_DATA } from '../const/common-const.js';
import { commonUtil } from './common-util';

const filterType = CONST_COMMON_DATA.FilterType;

const filterUtil = {
  [filterType.EVERYTHING]: (tripPoints) => tripPoints.filter((tripPoint) => tripPoint),
  [filterType.FUTURE]: (tripPoints) => tripPoints.filter((tripPoint) => commonUtil.dateIsFuture(tripPoint.dateFrom)),
  [filterType.PAST]: (tripPoints) => tripPoints.filter((tripPoint) => commonUtil.dateIsPast(tripPoint.dateFrom)),
  [filterType.PRESENT]: (tripPoints) => tripPoints.filter((tripPoint) => commonUtil.dateIsPresent(tripPoint.dateFrom))
};

export { filterUtil };
