export interface Entidad {
	entid: Number;
	entname: String;
	entshortname: String;
	entowner: String;
	entownermail: String;
	entownerphone: String;
	entownerposition: String;
    entaddress: String;
    entownerrun: String;
	aprobado: String;
	useraprueba?: String;
	fupdate?: Date;
	fcreate?: Date; 
}