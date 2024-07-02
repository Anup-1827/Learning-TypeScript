interface ContactType{
    fname: string;
    lname: string;
    status: PersonStatus
}

interface ContactAddressType{
    line1: string;
    line2: string;
    pincode?: ContactPincodeType
}

type ContactPincodeType = number

enum PersonStatus{
   Online = "online",
   Offline = "offline" 
}

const ContactDetails:ContactType ={
    fname: "Anup",
    lname: "Alone",
    status: PersonStatus.Online
}

// Generic Type 
function genericFun<T1, T2>(source: T1):T1{
    return source
}

let contactDetailFunction:ContactType = genericFun<ContactType, string>(ContactDetails)

let genericType2:string = genericFun<string, number>("Anup")

