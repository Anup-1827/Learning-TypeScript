
interface ClassicUser1 {
    name : {
        fname: string;
        lname: string;
    }
}

interface ClassicUser2 {
    name : {
        fname: string;
        middleName: string;
        lname: string;
    }
}
class User<T>{
    gender: string;
    id: string;
    classicUserData: any;


    getName(nameObj:T):void{
        const {gender, id} = this;

         this.classicUserData = {gender, id, ...nameObj}
    }
}
// 1. Generic Type
const UserData1 = new User<ClassicUser1>()
UserData1.classicUserData.fname;

// 2. Generic Type
const UserData2 = new User<ClassicUser2>()
UserData2.classicUserData.middleName;