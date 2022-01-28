const Article = require('../models/article');

const findOneArticle = async (id) => {
  try {
    return await Article.findOne({ id });
  } catch (error) {
    throw Error(error.message);
  }
}

const findArticles = async () => {
  try {
    return await Article.find({});
  } catch (error) {
    throw Error(error.message);
  }
}

const createArticle = async (parent, args) => {
  try {
    const article = new Article(args.articleInput);
    return await article.save();
  } catch (error) {
    throw Error(error.message);
  }
}

const updateArticle = async (parent, args) => {
  try {
    return await Article.findByIdAndUpdate(args.id, args.data);
  } catch (error) {
    throw Error(error.message);
  }
}

const deleteArticle = async (parent, args) => {
  try {
    return await Article.findByIdAndRemove(args.id);
  } catch (error) {
    throw Error(error.message);
  }
}

module.exports = { 
  createArticle,
  findOneArticle,
  findArticles,
  updateArticle,
  deleteArticle,
};
