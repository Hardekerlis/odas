const form = document.getElementById('loginForm');
let fetchSettings = {
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {
    // 'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: undefined
}

console.log(location);

const postData = async (url, body) => {
  fetchSettings.body = JSON.stringify(body);

  let response = await fetch(url, fetchSettings);

  console.log(response);

  return response.json();

}

const submit = async (e) => {
  e.preventDefault();

  const inputs = form.children;
  const info = {
    username: inputs[0].value,
    password: inputs[1].value,
    token: inputs[2].value
  }

  postData('http://localhost:3000/adminLogin', info)
  .then( data => {
    console.log(data);
  })

}

form.addEventListener('submit', submit);
