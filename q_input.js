document.addEventListener("keydown", function(event) {
    if ((event.key >= 'a' && event.key <= 'z') || event.key === 'Enter' || event.key === 'Backspace' || event.key === 'ğ' || event.key === 'ş' || event.key === 'ç' || event.key === 'ö' || event.key === "ı" || event.keyCode === 219 || event.keyCode === 221 || event.keyCode === 186 || event.keyCode === 222) {
      // Harf veya Enter tuşuna basıldı
      console.log("Tuş basıldı: " + event.key);
    }
    else {
      // Başka bir tuşa basıldı
      event.preventDefault();
    }
  });

  function submitForm(event) {
    event.preventDefault();
    var firstName = document.getElementById("first-name").value.trim();
    var lastName = document.getElementById("last-name").value.trim();    
    
    if (lastName.length < 2) {
      return;
    } else {
    }
    
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    
    var counter = localStorage.getItem("counter");
    var nameList = localStorage.getItem("nameList");
    
    if (!counter) {
      counter = "001";
    } else {
      counter = ("000" + (parseInt(counter) + 1)).slice(-3);
    }
    
    if (!nameList) {
      nameList = "";
    }
    
    nameList += counter + " " + firstName + " " + lastName + "\n";
    
    localStorage.setItem("counter", counter);
    localStorage.setItem("nameList", nameList);
    
    var message = document.createElement("div");
    message.innerHTML = "Sıra numaranız: " + "\n" + counter + "<br><br>" +  firstName + " " + lastName;

    message.classList.add("message");
    document.body.appendChild(message);
    
    setTimeout(function() {
      document.body.removeChild(message);
      document.getElementById("first-name").value = "";
      document.getElementById("last-name").value = "";
    }, 6500);
    document.getElementById("first-name").focus(); // islem sonrasi cursor isme döner
  }


  setInterval(function() {
    var now = new Date();
    if (now.getHours() === 7 && now.getMinutes() === 0 && now.getSeconds() === 0) {
      localStorage.setItem("counter", "000");
    }
  }, 1000);
  