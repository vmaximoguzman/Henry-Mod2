function validation(username, password) {
  const email =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!username.value.match(email) && !username && !username.length < 35) {
    alert("Username ERROR7");
  }

  const contra = password.split("");
  const booleano = "";
  contra.map((letra) => {
    if (typeof letra === "number") {
      return (booleano = true);
    }
  });

  if (booleano && password.length < 10 && password.length > 6) {
    alert("Password ERROR7");
  }
}
