// // pages/api/metrics.js
// import { register } from './prometheus';
//
// export default async function handler(req, res) {
//     // Задаем заголовки для корректного отображения метрик в Prometheus
//     res.setHeader('Content-Type', register.contentType);
//     res.send(await register.metrics());
// }
