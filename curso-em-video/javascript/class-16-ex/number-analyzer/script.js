function addNumberToSetup(number) {
  const elAnalyzerWrapper = document.getElementById('analyzer-wrapper');

  if (elAnalyzerWrapper) {
    const existingValues = getAnalyzerValues();
    const alreadyOnSetup = existingValues.some((value) => value === number);
    if (alreadyOnSetup) {
      return printError('this number its already on setup');
    }

    const elNewNumber = document.createElement('option');
    elNewNumber.value = number;
    elNewNumber.innerText = `value: ${number}`;

    elAnalyzerWrapper.appendChild(elNewNumber);
  }
}

function getAnalyzerValues() {
  const elAnalyzerWrapper = document.getElementById('analyzer-wrapper');
  const values = [];

  if (elAnalyzerWrapper) {
    elAnalyzerWrapper.childNodes.forEach((optionElement) =>
      values.push(Number(optionElement.value))
    );
  }

  return values;
}

function createParagraph(message) {
  if (!message) return null;

  const paragraph = document.createElement('p');
  paragraph.innerText = message;

  return paragraph;
}

function analyzeValues(values = []) {
  const valuesAmount = values.length;
  const sum = values.reduce((acc, value) => {
    return acc + value;
  }, 0);

  const greaterValue = values.reduce((acc, value) => {
    return value > acc ? value : acc;
  }, values[0]);

  const smallerValue = values.reduce((acc, value) => {
    return value < acc ? value : acc;
  }, values[0]);

  const averageString = (sum / valuesAmount).toFixed(2);
  const average = Number(averageString);

  const elTotalOfValues = createParagraph(
    `the amount of values is: ${values.length}`
  );
  const elResultGreater = createParagraph(
    `the greater value is: ${greaterValue}`
  );
  const elResultSmallest = createParagraph(
    `the smaller value is: ${smallerValue}`
  );
  const elResultSum = createParagraph(`the sum of all values is: ${sum}`);
  const elResultAverage = createParagraph(
    `the average of the values is: ${average}`
  );

  const elResultWrapper = document.createElement('div');
  elResultWrapper.appendChild(elTotalOfValues);
  elResultWrapper.appendChild(elResultGreater);
  elResultWrapper.appendChild(elResultSmallest);
  elResultWrapper.appendChild(elResultSum);
  elResultWrapper.appendChild(elResultAverage);

  printResponse(elResultWrapper);
}

function printError(message) {
  const elMessage = document.createElement('p');
  elMessage.innerText = message;

  printResponse(elMessage);
}

function printResponse(response) {
  const elResponse = document.getElementById('response');

  if (elResponse) {
    elResponse.innerHTML = '';

    elResponse.appendChild(response);
  }
}

function run() {
  const elSetupForm = document.getElementById('setup-form');
  const elAnalysisForm = document.getElementById('analysis-form');

  function handleSubmitSetupForm(event) {
    event.preventDefault();

    const setupFormData = new FormData(elSetupForm);
    const setupNumberTyped = setupFormData.get('setup-number');

    if (!setupNumberTyped) {
      return printError('please insert a valid number');
    }

    const setupNumber = Number(setupNumberTyped);

    if (setupNumber <= 0) {
      return printError('type a number greater than zero');
    }
    if (setupNumber > 100) {
      return printError('type a number less than one hundred');
    }

    addNumberToSetup(setupNumber);
  }

  function handleSubmitAnalysisForm(event) {
    event.preventDefault();

    const values = getAnalyzerValues();

    if (!values.length) {
      return printError('type at least one value');
    }

    analyzeValues(values);
  }

  elSetupForm.addEventListener('submit', handleSubmitSetupForm);
  elAnalysisForm.addEventListener('submit', handleSubmitAnalysisForm);
}

run();
