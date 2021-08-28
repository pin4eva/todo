import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    item: String
});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;