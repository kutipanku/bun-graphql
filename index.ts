import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { PrismaClient } from "@prisma/client";
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Initialize prisma instance
const prisma = new PrismaClient();

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const app = express();

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
await server.start();

app.use(
  cors(),
  bodyParser.json(),
  expressMiddleware(server, {
    context: async () => ({
      prisma
    }),
  }),
);

app.listen(process.env.APP_PORT || 4000, () => {
  console.log(
    `🚀 Server started on http://localhost:${process.env.APP_PORT || 4000
    }/graphql`
  );
});