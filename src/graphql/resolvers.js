const Article = require('../models/article');
const { 
  createArticle,
  findArticles,
  findOneArticle,
  updateArticle,
  deleteArticle,
} = require('../controllers');

const resolvers = {
  Query: {
    articles: findArticles,
    article: findOneArticle,
  },
  Mutation: {
    addArticle: createArticle,
    updateArticle: updateArticle,
    deleteArticle: deleteArticle,
  }
}

module.exports = resolvers;