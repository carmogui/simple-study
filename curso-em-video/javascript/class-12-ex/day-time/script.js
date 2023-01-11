function run() {
  const elMessage = document.getElementById('message');
  const elImage= document.getElementById('image');

  const now = new Date();
  const currentHour = now.getHours();
  
  elMessage.innerText = `it is now ${currentHour} o'clock`;

  if (currentHour < 8 || currentHour > 18) {
    elImage.src = 'assets/night.png';
    elImage.alt = 'night time outside in the city';
    document.body.style.backgroundColor = '#606060';
  } else if (currentHour < 12 ) {
    elImage.src = 'assets/morning.png';
    elImage.alt = 'morning sky with yellow sun';
    document.body.style.backgroundColor = '#ffff78';
  } else {
    elImage.src = 'assets/afternoon.png';
    elImage.alt = 'afternoon landscape with a river and a stone bridge';
  }
}
