function repeatWhile() {
  let i = 0;
  
  console.log('before while, i=', i);
  while(i<5) {
    console.log(i);
    i++;
  }
  console.log('after while, i=', i);
}

function repeatFor() {
  for(let i=0; i<5; i++) {
    console.log(i)
  }

}

// repeatWhile();
// repeatFor();
