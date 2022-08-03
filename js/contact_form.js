const allForm = document.querySelectorAll('.form input, .form textarea');

for (let form of allForm) {
    form.addEventListener('input', function () {
        if (this.checkValidity()) {
            this.classList.add('valid');
            this.classList.remove('invalid');
        } else {
            this.classList.add('invalid');
            this.classList.remove('valid');
        }

        if (this.value === '') {
            this.classList.remove('valid');
            this.classList.remove('invalid');
        }
    });
}

var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form");
    var status = document.getElementById("status")

    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Дякуємо. Ваш запит прийнято. Ми невдовзі вам відповімо)";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Упс. Спробуйте заповнити форму ще раз."
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Упс. Спробуйте заповнити форму ще раз."
    });
}
form.addEventListener("submit", handleSubmit)