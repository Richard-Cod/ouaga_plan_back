export interface ValidationObject {
    state : Boolean,
    message : any
}

export interface PlanValidator{
    validateForCreation(data : any) : ValidationObject
}