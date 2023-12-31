import {pool} from '../db.js'
import express from 'express'
const app=express()
export const ping=async(req,res)=>{
    const [result]=await pool.query('SELECT "pong" AS result')
    res.json(result[0])
    app.use(employeesRoutes)
    }