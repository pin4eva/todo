// import any module
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db";
import todoRoutes from "./routes/todoRoutes"

dotenv.config()



// Intialize express
const app = express()

// load middlewares
app.use(express.json());
app.use(cors({origin:"http://localhost:3000"}))


// load custom routes
app.get("/", (req, res) => {
    res.send("Hello world")
})

app.use("/todo", todoRoutes)

// create server function
const startServer = async () => {
    try {
        await connectDB()
        app.listen(process.env.PORT, ()=>console.log(`server started on port ${process.env.PORT}`))
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

startServer()