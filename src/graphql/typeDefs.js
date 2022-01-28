const { gql } = require('apollo-server');
const { models } = require('mongoose');

const typeDefs = gql(`
  type Article {
    id: ID!
    title: String!
    content: String!
  }
  input ArticleInput {
    title: String!
    content: String!    
  }
  type Query {
    articles: [Article]
    article(id: ID!): Article
  }
  type Mutation {
    addArticle(articleInput: ArticleInput!): Article
    updateArticle(id: ID!, data: ArticleInput): Article
    deleteArticle(id: ID!): Article
  }
`)

module.exports = typeDefs;