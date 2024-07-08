// Polymorphism allows to define multiple methods with same name but different funcitonalities
// 1. Method OverRiding
// 2. Method OverLoading --> Same Name Methods (JS does not support this)
// 3. Class Implements

class NewUser{
    firstName: string;
    age: number;
    email: string;
    constructor(firstName:string, age:number, email:string){}
}

class BaseUser extends NewUser{
    protected role: string;

    public hasAllAccess():boolean{
        return this.role === "Admin"
    }
}


class SuperAdmin extends BaseUser{
    // 1. OverRiding
    role = "Admin"

    // 1. OverRiding
    // public hasAllAccess(): boolean {
    //     return true;
    // }

    // 2. OverLoading
    public hasAllAccess(user = new BaseUser("Anup", 25, "test@test.com") ):boolean{
        if(user ){
            return false
        }
        else{
            return true
        }
    }   
}