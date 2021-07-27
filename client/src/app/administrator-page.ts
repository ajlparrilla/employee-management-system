export class AdministratorPage {
    constructor(_id='', fullname='', position='', username= '', password=''){
        this._id = _id;
        this.fullname = fullname;
        this.position= position;
        this.username= username;
        this.password= password;
    }
    _id:string;
    fullname:string;
    position:string;
    username:string;
    password:string;
}
