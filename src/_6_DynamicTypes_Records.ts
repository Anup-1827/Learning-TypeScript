// If we don't have the idea about the keys and their type
let x: Record<string,string | number | boolean | Function> = {name: "Anup"}
x.id = 1
x.status = true
x.log = ()=> (x.name)

// Omitting the prroperty
interface Student{
    name: string;
    rollNo: number
}

interface StudentAddreess{
    line1: string;
    line2: string;
    pincode: number
}

type Student_Copy  = Partial<Student> // Partial makes all student property optional
type Student_Detial  = Omit<Student & StudentAddreess, "line1"> // Removed line1 property from Student Details

type Some_Student_Field = Pick<Student_Detial, "name"| "pincode"> // Only name and pincode is picked for student filed

type Student_Required = Required<Student_Copy> // Make all the fields compulsary