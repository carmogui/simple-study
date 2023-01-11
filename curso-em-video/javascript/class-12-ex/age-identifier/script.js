const TIMESTAMP_INITIAL_YEAR = 1970;
const RESPONSE_ID = 'response';

function setResponse(text) {
  if (!text) return null;

  const elResponse = document.getElementById(RESPONSE_ID);

  if (elResponse) {
    elResponse.innerText = text;
  } else {
    const elSection = document.getElementById('section');
  
    if (elSection) {
      const elNewResponse = document.createElement('p');
      elNewResponse.setAttribute('id', RESPONSE_ID);
      elNewResponse.innerText = text;
      elSection.appendChild(elNewResponse); 
    }
  }

}

function run() {
  const elForm = document.getElementById('form');
  
  function handleSubmit(event) {
    event.preventDefault();
    

    const data = new FormData(elForm);
    const birthday = data.get('birthday');
    
    if (birthday) {
      const date = new Date(birthday);
      const now = new Date();
      const calculatedDate = new Date(now - date);
      const calculatedYear = Number(calculatedDate.getFullYear()) - TIMESTAMP_INITIAL_YEAR;
      
      const response = `You have ${calculatedYear < 0 ? 0 : calculatedYear} ${calculatedYear === 1 ? 'year' : 'years'} old`;
      setResponse(response);
    } else {
      setResponse('Chose a valid date');
    }
  }

  if (elForm) elForm.addEventListener('submit', handleSubmit)
}

run();
