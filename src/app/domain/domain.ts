export interface User{
    id:string;
    name:string;
    login:string;
    password?:string;
    mobile:string;
    avatar:string;
    email:string|null;

}

export interface Auth{
    login:string;
    password:string;

}

export interface Quote{
    cn:string;
    en:string;
    imgUrl:string;
}