export interface Usuario {
    userlogin : String;
    username : String;
    userpass : String;
    usermail : String;
    status : String;
    upriv : String;
    userrun : String;
    entidad : Number;
    fupdate? : Date;
    fcreate? : Date;
    secret? : String;
    aprobado : String;
}