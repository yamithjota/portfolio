// email
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

email.addEventListener("keyup", () => isValidEmail(email.value));
fullName.addEventListener("keyup", () => isValidName(fullName.value));
phoneNumber.addEventListener("keyup", () => isValidPhone(phoneNumber));
subject.addEventListener("keyup", () => isValidSubject(subject.value));
mess.addEventListener("keyup", () => isValidMessage(mess.value));


function sendEmail() {
    const bodyMessage =
        `Full Name: ${fullName.value}<br>
        Email: ${email.value}<br> 
        Phone Number: ${phoneNumber.value}<br>
        Subject: ${subject.value}<br> 
        Message: ${mess.value}`;

    Email.send({
        SecureToken: "33db04fb-1260-4c4d-8036-6d06520ae11a",
        To: 'yamithjota22@gmail.com',
        From: "yamithjota22@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your message has been sent successfully",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        }
    );
}



/* Function for check all inputs*/
function checkInputs() {
    const items = document.querySelectorAll(".item");

    // Remove event listener
    items.forEach(item => {
        item.removeEventListener("keyup", handleKeyUp);
    });

    // Add new event listener
    items.forEach(item => {
        item.addEventListener("keyup", handleKeyUp);
    });

    function handleKeyUp() {
        if (this.value.trim() !== "") {
            this.classList.add("error");
            this.parentElement.classList.add("error");
        } else {
            this.classList.remove("error");
            this.parentElement.classList.remove("error");
        }
    }

    let isFormValid = true;

    if (!isValidName(fullName.value)) {
        isFormValid = false;
    }

    if (!isValidEmail(email.value)) {
        isFormValid = false;
    }

    if (!isValidPhone(phoneNumber.value)) {
        isFormValid = false;
    }

    if (!isValidSubject(subject.value)) {
        isFormValid = false;
    }

    if (!isValidMessage(mess.value)) {
        isFormValid = false;
    }

    return isFormValid;
}


// Function for check phone
function isValidPhone() {
    const phoneNumber = document.getElementById("phone");
    let phone = phoneNumber.value.trim(); // Limpiar el valor, eliminando espacios en blanco

    const isPhoneValid = /^\d+$/.test(phone); // Validar que solo contenga dígitos
    const errorTxtPhone = document.querySelector(".text-error.phone");

    console.log(`phone ingresado: ${phone}, Resultado de validación: ${isPhoneValid}`);

    if (!isPhoneValid) {
        phoneNumber.classList.add("error");
        phoneNumber.parentElement.classList.add("error");
        errorTxtPhone.innerText = "Enter a valid phone number";
        return false;
    } else {
        phoneNumber.classList.remove("error");
        phoneNumber.parentElement.classList.remove("error");
        errorTxtPhone.innerText = "";
        return true;
    }
}

//Function for check email
function isValidEmail(emailAddress) {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
    console.log(`Email ingresado: ${emailAddress}, Resultado de validación: ${isEmailValid}`);
    const errorTxtEmail = document.querySelector(".text-error.email");


    if (!isEmailValid) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
        errorTxtEmail.innerText = "Please enter a valid email address";
        return false;
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
        errorTxtEmail.innerText = "";
        return true;
    }
}


//Function for check name
function isValidName(name) {
    const isNameValid = name.trim().length >= 4;
    console.log(`Nombre ingresado: ${name}, Resultado de validación: ${isNameValid}`);

    const errorTxt = document.querySelector(".text-error.name");

    if (!isNameValid) {
        fullName.classList.add("error");
        fullName.parentElement.classList.add("error");
        errorTxt.innerText = "Requires a minimum of 4 characters";
        return false;
    } else {
        fullName.classList.remove("error");
        fullName.parentElement.classList.remove("error");
        errorTxt.innerText = "";
        return true;
    }
}


//Function for check subject
function isValidSubject(inputSubject) {
    const isSubjectValid = inputSubject.trim().length >= 4;
    const errorTxt = document.querySelector(".text-error.subject");
    console.log(`subject ingresado: ${inputSubject}, Resultado de validación: ${isSubjectValid}`);

    if (!isSubjectValid) {
        subject.classList.add("error");
        subject.parentElement.classList.add("error");
        errorTxt.innerText = "Requires a minimum of 4 characters";
        return false;
    } else {
        subject.classList.remove("error");
        subject.parentElement.classList.remove("error");
        errorTxt.innerText = "";
        return true;
    }
}


//Function for check message
function isValidMessage(inputMessage) {
    const isMessageValid = inputMessage.trim().length >= 10;
    const errorTxt = document.querySelector(".text-error.message");
    console.log(`message ingresado: ${inputMessage}, Resultado de validación: ${isMessageValid}`);

    if (!isMessageValid) {
        mess.classList.add("error");
        mess.parentElement.classList.add("error");
        errorTxt.innerText = "Requires a minimum of 10 characters";
        return false;
    } else {
        mess.classList.remove("error");
        mess.parentElement.classList.remove("error");
        errorTxt.innerText = "";
        return true;
    }
}

document.addEventListener("DOMContentLoaded", function () {
});



form.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = checkInputs();
    if (isValid) {
        sendEmail();
        form.reset();
        return false;

    } else {
        console.log("Faltan validaciones");
    }

});





// toggle icon bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

// scroll Sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Activate navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll 
            sec.classList.add('show-animate');
        }
        //if want to use animation that repeats on scroll use this 
        else {
            sec.classList.remove('show-animate');
        }
    });
    //Sticky header
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar links(scrolls)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}




const translations = {
    en: {
        title: "Welcome to my portfolio",
        description: "This is a brief description of my work and skills."
        // Añade más traducciones aquí
    },
    es: {
        title: "Bienvenido a mi portafolio",
        description: "Esta es una breve descripción de mi trabajo y habilidades."
        // Añade más traducciones aquí
    }
};

function translate(language) {
    document.getElementById('title').innerText = translations[language].title;
    document.getElementById('description').innerText = translations[language].description;
    // Añade más elementos aquí
}
