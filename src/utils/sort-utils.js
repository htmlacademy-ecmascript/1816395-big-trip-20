import { CONST_COMMON_DATA } from '../const/common-const.js';
import { commonUtil } from './common-util.js';


if (!Array.prototype.toSorted) {
  Array.prototype.toSorted = function (fn) {
    return [...this].sort(fn);
  };
}

const sortTypes = CONST_COMMON_DATA.sortTypes;

const sortUtil = {
  [sortTypes.DAY]: (points) => points.toSorted(commonUtil.getPointsDateDifference),
  [sortTypes.PRICE]: (points) => points.toSorted(commonUtil.getPointsPriceDifference),
  [sortTypes.TIME]: (points) => points.toSorted(commonUtil.getPointsDurationDifference),
  [sortTypes.EVENT]: () => {
    throw new Error(`${sortTypes.EVENT} is not implemented`);
  },
  [sortTypes.OFFERS]: () => {
    throw new Error(`${sortTypes.OFFERS} is not implemented`);
  }
};

export { sortUtil };
