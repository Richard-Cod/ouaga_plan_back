import { ContractConfiguration } from './../../clean/core/Config/ContractConfig';
import express from 'express'
import morgan from 'morgan'

import planRoutesModule from '../routes/plans'
const config = new ContractConfiguration()
const planRoutes = planRoutesModule(config.planRepository  , config.planValidator)

export default {
    apply(app : any){
        app.use(express.json())
        app.use(morgan('tiny'))      
        app.use("/plans" , planRoutes)
    }

}