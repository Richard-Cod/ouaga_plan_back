import { Plan } from './../entities/Plan';
export interface ICryptor{
    encrypt(password : string| number) : Promise<string>  ,

    compare(password : string ,  hash : string) : Promise<boolean>
    
}

