import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from "./database.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create task
app.post('/task', (req, res) => {
    const { description } = req.body;
    const query = `INSERT INTO tasks(description) VALUES(?)`;

    db.run(query, [description], function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.send({ id: this.lastID });
    });
});

// Delete task
app.delete('/task/:id', (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM tasks WHERE id = ?`;

    db.run(query, [id], function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.send({ deletedId: id });
    });
});

// Update task status
app.put('/task/:id', (req, res) => {
    const { id } = req.params;
    const { isCompleted } = req.body;
    const query = `UPDATE tasks SET isCompleted = ? WHERE id = ?`;

    db.run(query, [isCompleted, id], function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.send({ updatedId: id });
    });
});

// Get all tasks
app.get('/tasks', (req, res) => {
    const query = `SELECT * FROM tasks`;

    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.send(rows);
    });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



