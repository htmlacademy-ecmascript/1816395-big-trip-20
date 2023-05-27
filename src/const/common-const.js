const CONST_COMMON_DATA = {
  secondsInDay: 86400000,
  secondsInHour: 3600000,
  formatDateOneDay: 'YYYY-MM-DD',
  formatDateMinutes: 'MM[m]',
  formatDateHoursMinutes: 'HH[h] MM[m]',
  formatDateDaysHoursMinutes: 'DD[d] HH[h] MM[m]',
  formatDate: 'YYYY-MM-DDTHH:mm:ss',
  formatDateInfo: 'MMM DD',
  formatDatePoint: 'HH:mm',
  formatDateAddPoint: 'DD/MM/YY mm:ss',
  offersTitle: [
    'Add luggage', 'Switch to comfort class', 'Add meal', 'Choose seats', 'Travel by train'
  ],
  typeTripPoint: [
    'Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'
  ],
  typeOffers: [
    'Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'
  ],
  FilterType: {
    EVERYTHING: 'Everything',
    FUTURE: 'Future',
    PRESENT: 'Present',
    PAST: 'Past',
    ACCEPT_FILTER: 'Accept filter'
  },
  modeViewTripPoint: {
    DEFAULT: 'DEFAULT',
    EDITING: 'EDITING',
  },
  sortTypes: {
    'DAY': 'day',
    'EVENT': 'event',
    'TIME': 'time',
    'PRICE': 'price',
    'OFFERS': 'offers'
  }
};

export { CONST_COMMON_DATA };
