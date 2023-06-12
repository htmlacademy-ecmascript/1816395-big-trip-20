const CONST_COMMON_DATA = {
  secondsInDay: 86400000,
  secondsInHour: 3600000,
  formatDateOneDay: 'YYYY-MM-DD',
  formatDateMinutes: 'mm[M]',
  formatDateHoursMinutes: 'HH[H] mm[M]',
  formatDateDaysHoursMinutes: 'DD[D] HH[H] mm[M]',
  formatDate: 'YYYY-MM-DDTHH:mm:ss',
  formatDateInfo: 'MMM DD',
  formatDatePoint: 'HH:mm',
  formatDateAddPoint: 'DD/MM/YY hh:mm',
  typeOffers: [
    'taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'
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
