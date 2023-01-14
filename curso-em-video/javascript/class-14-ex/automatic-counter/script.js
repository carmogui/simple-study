function setResult(message) {
  const elResult = document.getElementById('result');

  elResult.innerHTML = `<p>${message}</p>`;
}

function run() {
  const elForm = document.getElementById('form');

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(elForm);
    const start = data.get('start');
    const end = data.get('end');
    const step = data.get('step');

    if (!start) {
      return setResult('Please, type a valid number on start');
    }

    if (!end) {
      return setResult('Please, type a valid number on end');
    }

    const numStart = Number(start);
    const numEnd = Number(end);
    const numStep = Number(step);

    if (!step || numStep < 1) {
      return setResult('Please, type a valid number on step');
    }

    let resultMessage = 'result: ';

    if (numStart < numEnd) {
      for (let i=numStart; i<=numEnd; i+=numStep) {
        const isEnd = i + numStep > numEnd;
        
        resultMessage = resultMessage.concat(`${i}${isEnd ? '!' : ' '}`);
      }

      return setResult(resultMessage);
    } else {
      for (let i=numStart; i>=numEnd; i-=numStep) {
        const isEnd = i - numStep < numEnd;
        
        resultMessage = resultMessage.concat(`${i}${isEnd ? '!' : ' '}`);
      }

      return setResult(resultMessage);
    }
  }

  if (elForm) elForm.addEventListener('submit', handleSubmit);
}

run();
