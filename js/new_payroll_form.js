window.addEventListener("DOMContentLoaded", (event) => {
    const name = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    name.addEventListener("input", function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            new EmployeePayrollData().name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
    // event Listener for salary
    const salary = document.querySelector("#salary");
    const output = document.querySelector(".salary-output");
    output.textContent = salary.value;
    salary.addEventListener("input", function () {
        output.textContent = salary.value;
    });

//date validation
const date = document.querySelector("#date");
date.addEventListener("input", function () {
    const startDate = new Date(
        Date.parse(
            getInputValueById("#day") +
            " " +
            getInputValueById("#month") +
            " " +
            getInputValueById("#year")
        )
    );
    try {
        new EmployeePayrollData().startDate = startDate;
        setTextValue(".date-error", "");
    } catch (e) {
        setTextValue(".date-error", e);
    }
    });

    checkForUpdate();
});



/**
 * UC11 to create Employee Payroll Object On Save.
 */
 const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpadateStorage(employeePayrollData);
    } catch (e) {
        return;
    }
}

/**
 * UC12 to save the Employee Payroll Object to Local Storage.
 */

 function createAndUpadateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList != undefined) {
        employeePayrollList.push(employeePayrollData);
    } else {
        employeePayrollList = [employeePayrollData]
    }
    alert(employeePayrollList);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}

//UC11 create object continued

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }

    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
    employeePayrollData.startDate = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setdItems = [];
    allItems.forEach(item => {
        if (item.checked) setItems.push(item.value);
    });
    return setItems;
}
/*
 *1: querySelector is newer feature.
 *2: the querySelector method can be used when selecting by element name, nesting, or class name
 *3: querySelector lets you find elements with rules that cant be expressed with getElementById
 */
const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}

//Reset form fuction to reset values
const resetForm = () => {
    setValue('#name', ' ');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary', ' ');
    setValue('#notes', ' ');
    setValue('#day', '1');
    setValue('#month', 'January');
    setValue('#year', '2020');
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}
const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
} 