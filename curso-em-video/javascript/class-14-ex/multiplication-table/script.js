function renderElement(element) {
  if (!element) return;

  const responseId = 'response';

  const elResponse = document.getElementById(responseId);
  element.id = responseId;

  if (elResponse) {
    elResponse.innerHTML = '';
    elResponse.appendChild(element);
  } else {
    const elSection = document.getElementById('section');

    if (elSection) elSection.appendChild(element);
  }
}

function createMessage(message) {
  const elMessage = document.createElement('p');
  elMessage.innerText = message;

  return elMessage;
}

function createMultiplicationTable(number) {
  const multiplicationTable = document.createElement('select');
  multiplicationTable.multiple = true;
  multiplicationTable.size = 10;

  for (let i = 1; i <= 10; i++) {
    const tableContent = document.createElement('option');
    tableContent.innerText = `${i} * ${number} = ${i * number}`;

    multiplicationTable.appendChild(tableContent);
  }

  return multiplicationTable;
}

function run() {
  const elForm = document.getElementById('form');

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(elForm);
    const inputReferenceNumber = data.get('reference-number');

    function getElement() {
      if (inputReferenceNumber) {
        const referenceNumber = Number(inputReferenceNumber);

        return createMultiplicationTable(referenceNumber);
      }

      return createMessage('Please type a valid number');
    }

    const element = getElement();
    renderElement(element);
  }

  if (elForm) elForm.addEventListener('submit', handleSubmit);
}

run();
