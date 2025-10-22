const jsonServer = require('json-server')

const Attendancetracker = jsonServer.create()

const router = jsonServer.router('db.json')

const middleware = jsonServer.defaults()

Attendancetracker.use(middleware)
Attendancetracker.use(router)

const PORT = process.env.PORT || 3000

Attendancetracker.listen(PORT, () => {
    console.log(`Attendancetracker running at port ${PORT} and waiting for client request`);

})