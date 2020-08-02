const getSleepHours = day => {
    switch(day) {
      case 'monday':
        return 5;
        break;
      case 'tuesday':
        return 8;
        break;
      case 'wednesday':
        return 6;
        break;
      case 'thursday':
        return 7;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 3;
        break;
      case 'sunday':
        return 9;
        break;
    }
  }

  const getActualSleepHours = () => {
    const dayOfTheWeek = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
    let totalSleepHours = 0;
    dayOfTheWeek.forEach(day => totalSleepHours += getSleepHours(day));
    return totalSleepHours;
  }

  const getIdealSleepHours = idealHours => idealHours * 7;

  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours===idealSleepHours) {
      console.log('Total ideal hours:',idealSleepHours);
      console.log('Total actual sleep hours:',actualSleepHours);
      console.log('Diference:',actualSleepHours-idealSleepHours);
      console.log('Perfect amount of sleep.');
    } else if (actualSleepHours>idealSleepHours) {
      console.log('Total ideal hours:',idealSleepHours);
      console.log('Total actual sleep hours:',actualSleepHours);
      console.log('Diference:',actualSleepHours-idealSleepHours);
      console.log('Got more sleep than needed.');
    } else {
      console.log('Total ideal hours:',idealSleepHours);
      console.log('Total actual sleep hours:',actualSleepHours);
      console.log('Diference:',actualSleepHours-idealSleepHours);
      console.log('Should get some rest.');
    }
  }
  calculateSleepDebt();