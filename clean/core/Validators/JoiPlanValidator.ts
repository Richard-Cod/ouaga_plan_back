import Joi from 'joi';
import { PlanValidator, ValidationObject } from './../contracts/PlanValidator';


export class JoiPlanValidator implements PlanValidator{
    constructor() {
    }
    validateForCreation(data: any) : ValidationObject{

        const schema = Joi.object({
            author : Joi
            .string()
            .required(),
            invited : Joi
            .array()
            .required(),
            title : Joi
            .string()
            .required(),
            description : Joi
            .string()
            .required(),
            date : Joi
            .date()
            .required(),
       })
       const { error } = schema.validate(data);

        return error ? {
            state : false,
            message : error.details[0].message
        } : {
            state : true,
            message : null
        }

    }
}

