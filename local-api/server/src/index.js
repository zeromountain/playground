import express from 'express';
import http from 'http';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers/index.js';
import schema from './shcema/index.js';
import { readDB } from './dbController.js';

(async () => {
  const apollo = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
      db: {
        messages: readDB('messages'),
        users: readDB('users'),
      },
    },
  });

  const app = express();

  app.use(
    cors({
      origin: ['http://localhost:3000', 'https://studio.apollographql.com'],
      credentials: true,
    })
  );
  const httpServer = http.createServer(app);

  await apollo.start();
  apollo.applyMiddleware({ app, path: '/api' });
  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000/api`);
})();
