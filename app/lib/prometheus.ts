// prometheus.js
const client = require('prom-client');

// Создаем регистр для сбора метрик
const register = new client.Registry();

// Добавляем стандартные метрики Node.js
client.collectDefaultMetrics({ register });

// Добавляем пользовательские метрики, если необходимо
const httpRequestsTotal = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method'],
    registers: [register],
});

// Экспортируем метрики и регистр
module.exports = { register, httpRequestsTotal };
