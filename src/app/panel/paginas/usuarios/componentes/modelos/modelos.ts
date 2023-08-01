export interface usuario {
    id: number;
    nombre:string;
    apellido:string;
    email:string;
    comision:number;
};

export interface creandoDataUsuario {
    nombre:string;
    apellido:string;
    email:string;
    comision:number;
};
export interface editandoDataUsuario {
    nombre?:string;
    apellido?:string;
    email?:string;
    comision?:number;
}
