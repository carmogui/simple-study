// simple if else
function checkAgeToDrive() {
  var age = 25;
  
  if (age > 16) {
    console.log('You can drive');
  } else {
    console.log("You can't drive");
  }
}

// using else if
function autoGreeting() {
  const now = new Date();
  const currentHour = now.getHours();
  
  if (currentHour < 12) {
    console.log('Good morning');
  } else if (currentHour < 18) {
    console.log('Good afternoon');
  } else {
    console.log('Good evening');
  }
}

// multiple condition
function getCurrentWeekday() {
  const now = new Date();
  const weekday = now.getDay();

  switch (weekday) {
    case 0:
      console.log('sunday');
      break;

    case 1:
      console.log('monday');
      break;

    case 2:
      console.log('tuesday');
      break;

    case 3:
      console.log('wednesday');
      break;

    case 4:
      console.log('thursday');
      break;

    case 5:
      console.log('friday');
      break;

    case 6:
      console.log('saturday');
      break;
  }
}

/**
 * code runner
 */

// checkAgeToDrive();
// autoGreeting();
getCurrentWeekday();