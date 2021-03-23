export interface Servicio {
    servname: string;
    servdesc?: string; 
    jsonreq?: string;
    jsonres?: string;
    metodos: string;
    apiversion: number;
    url?: string;
    endpoint?: string;
};