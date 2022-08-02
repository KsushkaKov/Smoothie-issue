function recepi() {
        let name = prompt("Hi! What is your name?");
        let request = prompt("Want to try smoothie?");
        request = request.toLocaleLowerCase();
        if (request === "yes") {
          return alert("Nice to meet you, " + name + ", and bon appetit!");
        } else {
          alert("It's a pity, " + name + ", we'll be in touch.");
        }
      }
      let recepiBtn = document.querySelector(".button");
      recepiBtn.addEventListener("click", recepi);