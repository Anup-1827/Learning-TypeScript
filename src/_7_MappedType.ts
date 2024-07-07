enum ContactStatus{
    Active = "active",
    InActive = "in-active"
}

interface ContactField{
    id:number;
    name: string;
    status: ContactStatus;
}

interface Query<Tprop>{
    sort?: "aesc" | "desc",
    matches(val: Tprop): boolean
}

// Mapped Type 
type ContactQuery = {
    [TypeProp in keyof ContactField] ?: Query<ContactField[TypeProp]>
}

function MyType(queryType: ContactQuery){

}

MyType( {
    id: { matches: (id) => id === 123 },
    name: { matches: (name) => name === "Carol Weaver" }
})