export function updateSalary(data, employeeName, wage){
    const employeeData = data.find(e => e.name === employeeName)
    if(wage <= 0) return
    if(employeeData){
        employeeData.wage += wage
    } else {
        alertSecurity()
    }
}

export function alertSecurity(){
    console.log("Alerting Security")
}