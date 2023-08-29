function onFormContactSubmit(e) {
    e.preventDefault();
  
    let error = false;
  
    let name = document.getElementById("Name");
    let email = document.getElementById("Email");
    let message = document.getElementById("Message");
  
    if (name.value.length <= 0) {
      error = true;
      alert("Name lenght cannot be empty");
      return;
    }
  
    if (!email.value.endsWith("@gmail.com")) {
      error = true;
      alert("Email must end with '@gmail.com'");
      return;
    }
  
    if (message.value.length <= 10) {
      error = true;
      alert("Message was too short");
      return;
    }
  
    if (error === false) {
      alert("Message Sent Successfully!");
      document.getElementById("form-contact-us").reset();
    }
  }

  document.getElementById("form-contact-us").addEventListener("submit", onFormContactSubmit);
  
  
  