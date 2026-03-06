/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temp) {
  // Your code here
  let season;
  let activity;
  switch (month) {
    case 1:
    case 2:
    case 12:
      season = "Winter";
      if(temp < 0){
        activity = "skiing";
      }
      else if(temp >= 0){
        activity = "ice skating";
      }
      break;
    case 3:
    case 4:
    case 5:
      season = "Spring";
      if(temp > 20){
        activity = "hiking";
      }
      else if(temp <= 20){
        activity = "museum visit";
      }
      break;
    case 6:
    case 7:
    case 8:
      season = "Summer";
      if(temp > 35){
        activity = "swimming";
      }
      else if(temp <= 35){
        activity = "cycling";
      }
      break;
    case 9:
    case 10:
    case 11:
      season = "Autumn";
      if(temp > 15){
        activity = "nature walk";
      }
      else if(temp <= 15){
        activity = "reading at a cafe";
      }
      break;
    default:
      return null;
  }
  return{season,activity};
}
