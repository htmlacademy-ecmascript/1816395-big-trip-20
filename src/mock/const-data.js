const CONST_DATA = {
  formatDateInfo:'MMM DD',
  pictureURL: 'https://loremflickr.com/248/152?random=',
  years: [2023, 2024],
  formatDate: 'YYYY-MM-DDTHH:mm:ss',
  booleanValue: [true, false],
  countLimit: 10,
  offers: [
    'Add luggage', 'Switch to comfort class', 'Add meal', 'Choose seats', 'Travel by train'
  ],
  descriptionPlaces: [
    'beautiful place', 'picturesque place', 'cozy corner'
  ],
  descriptionCity: ', is a beautiful city, a true pearl, with crowded streets.',
  typeTripPoint: [
    'Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'
  ],
  typeOffers :[
    'Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'
  ],
  cities: [
    'Abidjan',
    'Adana',
    'Addis Ababa',
    'Adelaide',
    'Accra',
    'Aktyubinsk/ Aktobe',
    'Alexandria',
    'Algiers',
    'Almaty',
    'Amsterdam',
    'Ankara',
    'Antalya',
    'Antananarivo',
    'Antwerp',
    'Anshan',
    'Astana',
    'Asuncion',
    'Athens',
    'Ahmedabad',
    'Ashgabat',
    'Baghdad',
    'Basel',
    'Baku',
    'Bangalore',
    'Bangkok',
    'Bandung',
    'Barranquilla',
    'Barcelona',
    'Batumi',
    'Beirut',
    'Belgrade',
    'Belo Horizonte',
    'Berlin',
    'Berne',
    'Birmingham',
    'Bishkek',
    'Babruysk',
    'Bogota',
    'Bordeaux',
    'Brasilia',
    'Bratislava',
    'Brest',
    'Brisbane',
    'Budapest',
    'Bukhara',
    'Bucharest',
    'Buenos Aires',
    'Bhopal',
    'Valencia',
    'Varna',
    'Warsaw',
    'Washington',
    'Wellington',
    'Vienna',
    'Venice',
    'Vilnius',
    'Vitebsk',
    'The Hague',
    'Havana',
    'Hamburg',
    'Kaohsiung',
    'Guadalajara',
    'Guatemala',
    'Gdansk',
    'Ghent',
    'Gothenburg',
    'Jilin',
    'Glasgow',
    'Gomel',
    'Grodno, Hrodna',
    'Guangzhou',
    'Guayaquil',
    'Guiyang',
    'Dakar',
    'Dhaka, Dacca',
    'Dallas',
    'Dalian',
    'Damascus',
    'Dar es Salaam',
    'Delhi',
    'Jaipur',
    'Jakarta',
    'Dnipropetrovsk',
    'Donetsk',
    'Dresden',
    'Douala',
    'Dublin',
    'Dushanbe',
    'Duesseldorf',
    'Yerevan',
    'Geneva',
    'Zhytomyr',
    'Zagreb',
    'Zaporizhia',
    'Ibadan',
    'Jerusalem',
    'Izmir',
    'Indore',
    'Innsbruck',
    'Incheon',
    'Yokohama',
    'Islamabad',
    'Esfahan',
    'Kawasaki',
    'Cairo',
    'Santiago de Cali',
    'Calcutta',
    'Cannes',
    'Kanpur',
    'Karaganda',
    'Caracas',
    'Karachi',
    'Karlovy Vary',
    'Casablanca',
    'Kaunas',
    'Gwangju',
    'Cologne',
    'Quezon City',
    'Kiev',
    'Kinshasa',
    'Kyoto',
    'Quito',
    'Kishinev',
    'Klaipeda',
    'Kobe',
    'Conakry',
    'Copenhagen',
    'Cordoba',
    'Krakow',
    'Kuala Lumpur',
    'Kunming',
    'Lagos',
    'Lucknow',
    'Lanzhou',
    'Lahore',
    'Leipzig',
    'Liverpool',
    'Lima',
    'Limassol',
    'Lyons',
    'Lisbon',
    'Lausanne',
    'London',
    'Los Angeles',
    'Luanda',
    'Lviv',
    'Luxembourg',
    'Madrid',
    'Manaus',
    'Manila',
    'Maputo',
    'Maracaibo',
    'Marseilles',
    'Medan',
    'Medellin',
    'Melbourne',
    'Mexico',
    'Mashhad',
    'Milan',
    'Minsk',
    'Mahilyow',
    'Montreal',
    'Montevideo',
    'Monterrey',
    'Mumbai',
    'Munich',
    'Nagoya',
    'Nagpur',
    'Nairobi',
    'Nanjing',
    'Nanchang',
    'Narva',
    'Naples',
    'Nicosia',
    'New York',
    'Odessa',
    'Osaka',
    'Oslo',
    'Ottawa',
    'Palembang',
    'Paris',
    'Beijing',
    'Perth',
    'Poznan',
    'Porto Alegre',
    'Potsdam',
    'Prague',
    'Pune',
    'Busan',
    'Pyongyang',
    'Recife',
    'Riga',
    'Rome',
    'Rio (de) Janeiro',
    'Rotterdam',
    'Salvador',
    'Samarkand',
    'San Diego',
    'Sao Paulo',
    'San Francisco',
    'Santo Domingo',
    'Santiago',
    'Sapporo',
    'Sevastopol',
    'Seoul',
    'Sydney',
    'Simferopol',
    'Singapore',
    'Salt Lake City',
    'Sofia',
    'Istanbul',
    'Surabaya',
    'Surat',
    'Taipei',
    'Taiyuan',
    'Tallinn',
    'Tangshan',
    'Tartu',
    'Tashkent',
    'Tbilisi',
    'Tabriz',
    'Teh(e)ran',
    'Tel Aviv',
    'Tiraspol',
    'Tokyo',
    'Toronto',
    'Toulouse',
    'Daegu, Taegu',
    'Daejeon',
    'Tianjin',
    'Urumchi',
    'Utrecht',
    'Wuhan',
    'Philadelphia',
    'Phoenix',
    'Florence',
    'Frankfort on the Main',
    'Frankfort on the Oder',
    'Fukuoka',
    'Fushun',
    'Haifa',
    'Aleppo',
    'Hanoi',
    'Hangzhou',
    'Harare',
    'Harbin',
    'Kharkiv',
    'Helsinki',
    'Hiroshima',
    'Ho Chi Minh',
    'Houston',
    'Jinan',
    'Zibo',
    'Qingdao',
    'Qiqihar',
    'Zurich',
    'Changsha',
    'Changchun',
    'Chicago',
    'Chittagong',
    'Chongqing',
    'Chengdu',
    'Shanghai',
    'Shymkent',
    'Shenyang',
    'Szczecin',
    'Eilat',
    'Eindhoven',
    'Giza',
    'Kuwait',
    'Riyadh',
    'Jurmala',
    'Yangon, Rangoon',
  ]

};

export { CONST_DATA };
