// Write your solution in this file!

employee = {
    "name" : "Sam",
    "streetAddress" : "12 Broadway"

};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let employee = {...employee};
    employee[key] = value;
    return employee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    let employee = employee.assign();
}

function deleteFromEmployeeByKey(employee,key){
    let removeEmployee = {...employee};
    delete removeEmployee.name;

    return employee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
} 
