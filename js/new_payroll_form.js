// UC 8
const salary = document.querySelector('#salary');
const salaryOutput = document.querySelector('.salary-output');
salaryOutput.textContent = salary.value;
salary.addEventListener('input', function(){
    salaryOutput.textContent = salary.value;
});
const name = document.querySelector('#name');
const nameError = document.querySelector('.text-error');
nameError.textContent = name.value;
name.addEventListener('input', function () {
    let nameRegex = new RegExp("^[A-Z]{1}[A-Za-z\\s]{2,}$");
    if (nameRegex.test(name.value))
        nameError.textContent = "";
    else
        nameError.textContent = "Name is Incorrect";
})