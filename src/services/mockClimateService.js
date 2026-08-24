// Mock Climate & Weather Service for Mango Farms

export const CURRENT_WEATHER = {
  temperature: 29,
  temperatureUnit: '°C',
  condition: 'Partly Cloudy',
  humidity: 68,
  humidityUnit: '%',
  rainfall: 2,
  rainfallUnit: 'mm',
  rainfallLevel: 'Low',
  windSpeed: 12,
  windSpeedUnit: 'km/h',
  windDirection: 'WSW',
  solarRadiation: '21.4 MJ/m²',
  vaporPressureDeficit: '1.3 kPa',
  soilMoisture: '34%',
  statusText: 'Favorable Conditions',
  location: 'Farm Field (Plot A Station)',
  updatedAt: '18 May 2025, 09:30 AM'
};

export const FORECAST_15_DAYS = [
  { day: '18 May', date: '2025-05-18', temp: 31, tempMin: 22, rain: 14, rainProb: 65, humidity: 72, risk: 'Moderate', condition: 'Scattered Showers' },
  { day: '19 May', date: '2025-05-19', temp: 30, tempMin: 21, rain: 3, rainProb: 25, humidity: 74, risk: 'Low', condition: 'Partly Cloudy' },
  { day: '20 May', date: '2025-05-20', temp: 32, tempMin: 23, rain: 2, rainProb: 15, humidity: 70, risk: 'Low', condition: 'Sunny' },
  { day: '21 May', date: '2025-05-21', temp: 31, tempMin: 22, rain: 16, rainProb: 70, humidity: 75, risk: 'Moderate', condition: 'Thunderstorms' },
  { day: '22 May', date: '2025-05-22', temp: 29, tempMin: 21, rain: 7, rainProb: 40, humidity: 72, risk: 'Low', condition: 'Cloudy' },
  { day: '23 May', date: '2025-05-23', temp: 31, tempMin: 22, rain: 2, rainProb: 10, humidity: 68, risk: 'Low', condition: 'Clear' },
  { day: '24 May', date: '2025-05-24', temp: 30, tempMin: 21, rain: 5, rainProb: 30, humidity: 73, risk: 'Low', condition: 'Partly Cloudy' },
  { day: '25 May', date: '2025-05-25', temp: 33, tempMin: 24, rain: 4, rainProb: 20, humidity: 71, risk: 'Low', condition: 'Sunny' },
  { day: '26 May', date: '2025-05-26', temp: 34, tempMin: 24, rain: 17, rainProb: 75, humidity: 76, risk: 'High', condition: 'Heavy Rain Risk' },
  { day: '27 May', date: '2025-05-27', temp: 31, tempMin: 22, rain: 1, rainProb: 10, humidity: 72, risk: 'Low', condition: 'Breezy' },
  { day: '28 May', date: '2025-05-28', temp: 33, tempMin: 23, rain: 8, rainProb: 45, humidity: 74, risk: 'Moderate', condition: 'Light Rain' },
  { day: '29 May', date: '2025-05-29', temp: 34, tempMin: 24, rain: 1, rainProb: 15, humidity: 69, risk: 'Low', condition: 'Sunny' },
  { day: '30 May', date: '2025-05-30', temp: 34, tempMin: 24, rain: 9, rainProb: 50, humidity: 73, risk: 'Moderate', condition: 'Evening Showers' },
  { day: '31 May', date: '2025-05-31', temp: 33, tempMin: 23, rain: 3, rainProb: 20, humidity: 70, risk: 'Low', condition: 'Clear' },
  { day: '01 Jun', date: '2025-06-01', temp: 35, tempMin: 25, rain: 2, rainProb: 15, humidity: 68, risk: 'Low', condition: 'Warm & Sunny' },
];

export const mockClimateService = {
  getCurrentWeather: async () => {
    return { ...CURRENT_WEATHER, isDemo: true };
  },

  get15DayForecast: async () => {
    return [...FORECAST_15_DAYS];
  },

  getClimateSummary: async () => {
    return {
      isDemo: true,
      currentCondition: 'Favorable',
      climateRiskLevel: 'Low – Moderate',
      floweringStatusNote: 'Generally favorable conditions for flowering. Rainfall variations in the next 7 days may slightly increase flower drop risk.',
      temperatureSuitability: 'Optimal (26°C - 33°C range facilitates efficient anthesis and pollen viability)',
      humidityAlert: 'Morning RH (74%) promotes vegetative dew. Monitor lower canopies for early powdery mildew spores.',
      rainfallImpact: 'Spike predicted on 21 & 26 May. Ensure canopy aeration and avoid spraying on rain-heavy mornings.'
    };
  }
};
