const getSleepHours = day => {
    switch(day) {
      case 'monday':
        return 4;
        break;
      case 'tuesday':
        return 8;
        break;
      case 'wednesday':
        return 6;
        break;
      case 'thursday':
        return 3;
        break;
      case 'friday':
        return 5;
        break;
      case 'saturday':
        return 7;
        break;
      case 'sunday':
        return 2;
        break;
    }
  }
  
const getActualSleepHours = () => {
    const dayOfTheWeek = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
    
    let totalSleepHours = 0;
    
    dayOfTheWeek.forEach(day => totalSleepHours += getSleepHours(day));
    
    return totalSleepHours;
}
  

const getIdealSleepHours = () => {
    const idealHours = 6;
    return idealHours * 7;
}