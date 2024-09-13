import coinChangeController from './controllers/coinChangeController.js';

const req = {
    body: {
        X: 403,
        arr: [25, 10, 5, 1, 8 , 10, 7, 20]
    }
};

const res = {
    statusCode: null,
    body: null,
    status(code) {
        this.statusCode = code;
        return this;
    },
    json(body) {
        this.body = body;
        console.log('Response:', this.statusCode, body);
    }
};

coinChangeController(req, res);