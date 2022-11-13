var url = "http://localhost:3000/";

function registerBook() {
  if (!validateCode("code")) {
    return;
  }
  if (!validateName("name")) {
    return;
  }

  if (!validaData("author")) {
    return;
  }

  if (!validaSenha("genre")) {
    return;
  }

  if (!confirmaSenha("publisher")) {
    return;
  }
  if (!confirmaSenha("year")) {
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
}

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
