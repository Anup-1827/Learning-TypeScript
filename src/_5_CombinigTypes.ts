import { DoStatement } from "../node_modules/typescript/lib/typescript";

enum EmployeeStatus{
    Active = "active",
    InActive = "in-active",
    New = "new"
}

//Alternative for Enum
type EmployeeStatusEnm = "active" | "enum" | "in-active"
type ContactNumType = string | number

interface EmployeeType {
    id:number;
    employeeAdress: string;
    status:EmployeeStatusEnm;
    dob?: Date | number | string;
    contact?: ContactNumType
}

interface AddressLine{
    line1: string;
    line2: string;
    pincode: string;
}

//Ways to combine Interface
interface AddressLineEmployee extends EmployeeType, AddressLine {}
type Alternative = EmployeeType & AddressLine  

// Getting Keys of Obje
type EmployeeKyeType = keyof EmployeeType


const employeeDetais:EmployeeType ={
    id:1,
    employeeAdress :"xYZ",
    status: "active",
    contact: "99999999"
}


// Generic Function
const getData = <T1>(source: T1, key: keyof T1)=>{
    return source[key]
}

getData(employeeDetais, "dob")

function createNewEmployee(source: EmployeeType | string): EmployeeType{

    if(typeof source === "object"){
        return source
    }
    else{
        return {
            id: Math.random(),
            employeeAdress: source,
            status: "active",
        }
    }
}