var nick = prompt("Enter your pet nickname if you want")
    var pet = {
        name: "don",
        type: "dragon",
        age: 2,
        happiness: 85,
        hunger: 70,
        feed: function() {
            this.hunger -= 20;
            if (this.hunger < 0) {
                this.hunger = 0;
            }
            alert("hunger decreases by 20");
        },
        play: function() {
            this.happiness += 20;
            if (this.happiness > 100) {
                this.happiness = 100;
            }
            alert("happiness increases by 20");
        },
        agePet: function() {
            this.age += 1;
            this.happiness -= 5;
            this.hunger += 10;
            alert("age increases by 1, happiness decreases by 5, and hunger increases by 10");
            return {
                age: this.age,
                happiness: this.happiness,
                hunger: this.hunger
            };
        }
    }


function swapImage(newImageSrc) {
    var mainImage = document.getElementById("mainImage");
    mainImage.src = newImageSrc;
    // alert(prompt("What is the name of your Pet?"))
    // alert(prompt("What is the age of your Pet?"))
  }