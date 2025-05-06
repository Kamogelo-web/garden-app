// garden_advice.js

/**
 * Provides gardening advice based on the month and season.
 * TODO: Add JSDoc comments for better documentation.
 * TODO: Replace hardcoded advice with a more maintainable data structure.
 * TODO: Add advice for all months and different seasons/climates.
 * TODO: Consider adding location-specific advice.
 */
function getGardeningAdvice(month, season) {
    month = month.toLowerCase();
    season = season.toLowerCase();
  
    let advice = "No specific advice available for this month and season yet.";
  
    // TODO: Refactor this using a data structure (e.g., Map or object)
    if (month === 'january') {
      if (season === 'summer') {
        advice = "January (Summer): Focus on watering deeply, mulching to retain moisture, and harvesting summer vegetables like tomatoes and cucumbers.";
      } else if (season === 'winter') {
        advice = "January (Winter): Plan your garden for the upcoming season, order seeds, and protect sensitive plants from frost.";
      }
    } else if (month === 'july') {
       if (season === 'summer') {
        advice = "July (Summer): Keep up with watering, deadhead flowers to encourage blooming, and plant heat-tolerant vegetables.";
      } else if (season === 'winter') {
        advice = "July (Winter): Prune deciduous trees and shrubs, prepare soil for spring planting, and sow winter-hardy vegetables.";
      }
    }
  
    return advice;
  }
  
  // Example usage (can be removed or modified later)
  // console.log(getGardeningAdvice('January', 'Summer'));
  // console.log(getGardeningAdvice('July', 'Winter'));
  