import { Plan } from './../entities/Plan';
export interface PlansRepository{
    createPlan(plan : Plan) : Plan,
    getAll() : Plan[],
    getPlan(id : string| number) : Plan | undefined ,
    update(id: number | string, data: any) : Plan | undefined
    delete(id : string| number) :  Boolean ,
    populate(data : Plan[]) : any,
    
}