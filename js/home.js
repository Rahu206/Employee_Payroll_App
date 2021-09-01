let empPayrollList;
/**
 * Using Template Literals in the employee payroll details
 */
 window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem("editEmp");
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}


function createInnerHtml(){
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>"+
    "<th>start Date</th><th>Actions</th></tr>";

    if (empPayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
    <tr>
    <td><img src="${empPayrollData._profilePic}" class="profile" width="30px" alt=""></td>
    <td>${employeePayrollData._name}</td>
    <td>${employeePayrollData._gender}</td>
    <td>${getDeptHtml(employeePayrollData._department)}</td>
    <td>${employeePayrollData._salary}</td>
    <td>${employeePayrollData._startDate}</td>
    <td>
        <img name="${empPayrollData._id}" onclick="remove(this)" alt="delete" width="30px" src="../assets/assets/icons/delete-black-18dp.svg">
        <img name="${empPayrollData._id}" onclick="update(this)" alt="edit" width="30px" src="../assets/assets/icons/create-black-18dp.svg ">
    </td>
    </tr>
    }
    document.querySelector('#table-display').innerHTML = innerHtml
}

function getDeptHtml(deptList) {
    let deptHtml = ''
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml
}

/*const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name : 'Rahul Deshpande',
            _gender : 'Male',
            _department : [
                'Engineering',
                'Finance'
            ],
            _salary: '500000',
            _startDate: '9 Oct 2018',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/assets/profile-images/Ellipse -8.png'
        },
        {
            _name : 'IshuKumar',
            _gender : 'Male',
            _department : [
                'Engineering',
                
            ],
            _salary: '500000',
            _startDate: '29 June 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/assets/profile-images/Ellipse -9.png'
        },
        {
            _name : 'Meghna Dipanikar',
            _gender : 'Female',
            _department : [
                'Sales','HR'
            ],
            _salary: '350000',
            _startDate: '12 June 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/assets/profile-images/Ellipse -7.png'   
        }
    ];
    return empPayrollListLocal;
}*/