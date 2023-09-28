const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors');

const server = jsonServer.create();
server.use(cors());

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'),
        );
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(404).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// eslint-disable-next-line
server.use((req, res, next) => {
    if (!req.headers.authorization && req.path !== '/login') {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});

server.use(router);

server.listen(80, () => {
    console.log('server is running on 80 port');
});
