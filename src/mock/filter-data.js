import { filterUtil } from '../utils/filter-util.js';

function generateFilters(tripPoints) {
  return Object.entries(filterUtil).map(
    ([filterType, filterTripPoints]) =>
      ({
        type: filterType,
        count: filterTripPoints(tripPoints).length
      })
  );
}

export {generateFilters};
