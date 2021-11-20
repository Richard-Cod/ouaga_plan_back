import { ICryptor } from './ICryptor';

const bcrypt = require('bcrypt');



export class BcryptCryptor implements ICryptor{
    compare(password: string , hash : string): Promise<boolean> {
      return bcrypt.compare(password, hash);

    }
    
    encrypt(password: string | number): Promise<string> {
        const saltRounds = 10;

       return bcrypt.hash(password, saltRounds);


    }
    
}