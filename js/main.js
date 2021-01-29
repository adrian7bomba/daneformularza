let btn = document.querySelector("button");

document.querySelector("button").onclick = function () {
    let name = document.getElementById("name");
    name.innerText = fname.value;
    console.log(fname.value);

    let surname = document.getElementById("surname");
    surname.innerText = lname.value;
    console.log(lname.value);

    let phone = document.getElementById("phone");
    phone.innerText = tel.value;
    console.log(tel.value);
}