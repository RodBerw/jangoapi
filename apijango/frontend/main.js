var url = "http://localhost:3000/";

//BOOK

function registerBook() {
  if (!validateCode("code")) {
    return;
  }
  if (!validateString("name")) {
    return;
  }

  if (!validateString("author")) {
    return;
  }

  if (!validateString("genre")) {
    return;
  }

  if (!validateString("publisher")) {
    return;
  }
  if (!validateYear("year")) {
    return;
  }

  let body = {
    Code: document.getElementById("code").value,
    Name: document.getElementById("name").value,
    Author: document.getElementById("author").value,
    Genre: document.getElementById("genre").value,
    Publisher: document.getElementById("publisher").value,
    Year: document.getElementById("year").value,
  };

  let request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        console.log(request.responseText);
        alert("Registro efetuado com sucesso!");
      } else {
        console.error(request.responseText);
        alert("Não foi possível efetuar o registro!");
      }
    }
  };
  request.open("POST", url + "books");
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(body));
}

///Book functions

function validateCode(id) {
  let input = document.getElementById(id);
  let isNumber = /[0-9]/.test(input.value);
  if (isNumber) {
    input.style.border = 0;
    return true;
  } else {
    input.style.border = "solid 1px red";
    return false;
  }
}

function validateString(id) {
  let input = document.getElementById(id);
  let hasString = /[a-z]/.test(input.value);
  let hasStringM = /[A-Z]/.test(input.value);
  let isNumber = /[0-9]/.test(input.value);

  if (hasString || hasStringM || isNumber) {
    input.style.border = 0;
    return true;
  } else {
    input.style.border = "solid 1px red";
    return false;
  }
}

function validateYear(id) {
  let input = document.getElementById(id);
  let isNumber = /[0-9]/.test(input.value);

  if (isNumber) {
    input.style.border = 0;
    return true;
  } else {
    input.style.border = "solid 1px red";
    return false;
  }
}

//CLIENT

function registerClient() {
  if (!validateCode("code")) {
    return;
  }
  if (!validateName("userName")) {
    return;
  }

  if (!validaData("gender")) {
    return;
  }

  if (!validaSenha("bornDate")) {
    return;
  }

  if (!confirmaSenha("cpf")) {
    return;
  }

  let body = {
    Code: document.getElementById("code").value,
    UserName: document.getElementById("userName").value,
    Gender: document.getElementById("gender").value,
    BornDate: document.getElementById("bornDate").value,
    Cpf: document.getElementById("cpf").value,
  };
}

//RENT

function registerRent() {
  if (!validateCode("code")) {
    return;
  }
  if (!validateName("clientCode")) {
    return;
  }

  if (!validaData("bookCode")) {
    return;
  }

  if (!validaSenha("date")) {
    return;
  }

  if (!confirmaSenha("returnDate")) {
    return;
  }

  let body = {
    Code: document.getElementById("code").value,
    UserName: document.getElementById("clientCode").value,
    Gender: document.getElementById("bookCode").value,
    BornDate: document.getElementById("date").value,
    Cpf: document.getElementById("returnDate").value,
  };
}
