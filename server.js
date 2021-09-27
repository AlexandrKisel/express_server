const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const tasks = [{
  id: '1',
  number: '1',
  title: 'Title1',
  description: 'lorem ipsum',
  assignee: 'Yan1',
  taskStatus: 'done',
}, {
  id: '2',
  number: '2',
  title: 'Title2',
  description: 'lorem ipsum',
  assignee: 'Yan2',
  taskStatus: 'done',
}, {
  id: '3',
  number: '3',
  title: 'Title3',
  description: 'lorem ipsum',
  assignee: 'Yan3',
  taskStatus: 'pr',
}, {
  id: '4',
  number: '4',
  title: 'Title4',
  description: 'lorem ipsum',
  assignee: 'Yan4',
  taskStatus: 'pr',
}, {
  id: '5',
  number: '5',
  title: 'Title5',
  description: 'lorem ipsum',
  assignee: 'Yan5',
  taskStatus: 'progress',
}, {
  id: '6',
  number: '6',
  title: 'Title6',
  description: 'lorem ipsum',
  assignee: 'Yan6',
  taskStatus: 'progress',
}, {
  id: '7',
  number: '7',
  title: 'Title7',
  description: 'lorem ipsum',
  assignee: 'Yan7',
  taskStatus: 'todo',
}, {
  id: '8',
  number: '8',
  title: 'Title8',
  description: 'lorem ipsum',
  assignee: 'Yan8',
  taskStatus: 'todo',
}, {
  id: '9',
  number: '9',
  title: 'Title9',
  description: 'lorem ipsum',
  assignee: 'Yan9',
  taskStatus: 'todo',
},]

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tasks', (req, res) => {
  setTimeout(() => { res.json(tasks) }, 1000)
})

app.post('/addTask', (req, res) => {
  tasks.push(req.body)
  setTimeout(() => { res.json(tasks) }, 1000)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})