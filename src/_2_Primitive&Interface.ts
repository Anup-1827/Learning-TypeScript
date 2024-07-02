// These are pre-defined primitive types

let a:number;
let b:string;
let c:boolean;
let d:Date;
let e:string[];

a = 1
b = "Anup"
c = true
d = new Date()
e = ["Anup", "Gunjan"]
e = "Anup" as any

// Customize Type:-- TypeScript called as Interface
// extend keyword is used to inherit the field of other type
interface PersonType extends Address{
    id:number;
    fname: PersonName;  // This is alias used for string type
    dob?:Date  // Adding "?" allows as to make dob property optional
    status: PersonStatus // Enum
}

interface Address{
    line1: string;
    line2: string;
    pincode: number;
}

// Enum
enum PersonStatus{
    Active = "active", 
    Inactive = "inactive",
    New = "new"
}


const myDetail:PersonType ={
    id:1,
    fname: "Anup",
    dob: new Date("7/2/2024"),  // dob field is optional
    line1: "Address Line 1",
    line2: "Address Line 2",
    pincode: 442401,
    status: PersonStatus.Active
}

// Type Alias
type PersonName =  string

//  Function
function clone(source: PersonType):string{
    return source.fname
}

let cloneName:string = clone(myDetail)

// Callback functtion
function myFun(param1:string, func:(source: PersonType)=>string):string{
    return param1
}

let callbackFunc:string =  myFun("parameter", clone);


