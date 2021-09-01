/**
 * UC 4 Using Template Literals in the employee payroll details
 */
 window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
    <tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
</tr>
<tr>
    <td><img src="../assets/assets/profile-images/Ellipse -8.png" alt="" class="profile"></td>
    <td>Rahul</td>
    <td>Male</td>
    <td><div class="dept-label">HR</div><div class="dept-label">Finance</div></td>
    <td>300000</td>
    <td>1 Nov 2020</td>
    <td>
        <img src="../assets/assets/icons/delete-black-18dp.svg" alt="delete" name="1" onclick="remove(this)">
        <img src="../assets/assets/icons/create-black-18dp.svg" alt="edit" name="1" onclick="update(this)">
    </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}