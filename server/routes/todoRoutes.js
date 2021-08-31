import {Router} from "express";
import Todo from "../models/Todo"

const router = Router();

// Create todo
router.post("/", async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.send(todo)
    } catch (error) {
        res.send(error);
    }
} )
// Read todo
router.get("/", async (req,res) => {
    try {
        const todos = await Todo.find();
        res.send(todos)
    } catch (error) {
        res.send(error);
    }
})
// Get single todo
router.get("/:id", async (req,res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.send(todo)
    } catch (error) {
        res.send(error);
    }
})
// Update todo
router.put("/", async (req, res) => {
    try {
        const todo = await Todo.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true });
        res.send(todo)
    } catch (error) {
        res.send(error)
    }
})
// Delete todo
router.delete("/:id", async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(404).send("Todo not found");
        todo.remove();
        res.send("DELETED")
    } catch (error) {
        res.send("Record not found");
    }
})


export default router;