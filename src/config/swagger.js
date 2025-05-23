const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
require('dotenv').config({path: envFile});

const swaggerAutogen = require('swagger-autogen')({ language: 'ko' });
const outputFile = '../swagger-output.json'; // Swagger JSON 파일 경로
const endpointsFiles = ['../app.js'];

const hostAddr = process.env.HOST || "localhost:3000";
const proto =  process.env.NODE_ENV === 'production' ? "https" : "http";

const doc = {
    info: {
        title: '캡스톤 디자인 API',
        description: '캡스톤 디자인 API 문서입니다.',
    },
    host: hostAddr,
    schemes: [proto],
    basePath: '/',
};

swaggerAutogen(outputFile, endpointsFiles, doc);
