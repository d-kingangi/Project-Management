import express from 'express';
import cron from 'node-cron'
import { welcomeUser } from './Mailservices/welcomeuser';

const app = express()

const run = async () => {
    cron.schedule('*/10 * * * * *', async()=>{
        console.log('checking for a new user');
        
        await welcomeUser()
    })    
}

run()

app.listen(4200, ()=>{
    console.log("server running...");
})