const object = {
  name: 'foo',
  buz: 'bar',
};

async function asyncExample() {
  try {
    const response = await fetch(
      'https://api.github.com/users/guilherme-carmo'
    );
    const body = await response.json();

    console.log(body);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('acabou');
  }
}

asyncExample();

document.body.innerText = 'name' in object;
