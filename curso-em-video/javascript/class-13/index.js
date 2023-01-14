function eatCandy(candies) {
  const eatedCandies = candies.substring(0, candies.length-1);
  
  console.log(`before...: ${candies}`);
  console.log(`eating...: ${eatedCandies}*`);
  console.log(`after....: ${eatedCandies}`);
  console.log('');

  return eatedCandies;
}

function eatAllCandies() {
  let candies = '000000';

  candies = eatCandy(candies);
  candies = eatCandy(candies);
  candies = eatCandy(candies);
  candies = eatCandy(candies);
  candies = eatCandy(candies);
  candies = eatCandy(candies);

  console.log('finish... candies:', candies);
}

function eatAllCandiesWhile() {
  let candies = '00000000000000000000000000';

  while (candies.length > 0) {
    candies = eatCandy(candies);
  }

  console.log('finish... candies:', candies);
}

function eatAllCandiesDoWhile() {
  let candies = '0000';

  do {
    candies = eatCandy(candies);
  } while (candies.length > 0);

  console.log('finish... candies:', candies);
}

// eatAllCandies();
// eatAllCandiesWhile();
eatAllCandiesDoWhile();