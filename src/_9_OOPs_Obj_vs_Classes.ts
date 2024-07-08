class Message{
    // Types of Variable inside constructor are need to be defined here
    title:string;
    message:string;
    isSent: boolean;
    private _isSent: boolean; // This restricts property to be accessible inside the class

    constructor(title:string, message:string){
        this.title = title;
        this.message = message;
        this.isSent = false;
    }

    previewMessage():string{
        return this.message.slice(0,10).concat("....")
    }

    // Get Method
    get messageStatus():string{
        return this.isSent ? `${this.message} | has been sent` : `${this.message} | has not been sent`
    }

    //Set Method
    set hasSent(value: boolean){
        this.isSent = value
    }
}


const myMessage = new Message("Excited for New Course", "Hello....");

myMessage.previewMessage()
myMessage.messageStatus; // Get Method is always invoked as a property. Get Method always return something

myMessage.hasSent = true; // Set Method allows to set the value like property

// myMessage._isSent  = false // Will Thow an error as private variable are not accessible outside the class scope