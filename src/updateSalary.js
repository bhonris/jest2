import { alertSecurity } from "./alertSecurity"
export function updateSalary(data, employeeName, wage){
    const employeeData = data.find(e => e.name === employeeName)
    if(wage <= 0) return
    if(employeeData){
        employeeData.wage += wage
    } else {
        alertSecurity()
    }
}

