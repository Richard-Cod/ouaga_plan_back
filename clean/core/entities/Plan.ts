import { User } from './User';
export class Plan {
    constructor(
                public id? : string | number , 
                public author? : User ,
                public invited? : User[], 
                public title? : string , 
                public description? : string,
                public covImage? : string,
                
                public date? : Date  ) {
        
    }

    
 
    
    
}