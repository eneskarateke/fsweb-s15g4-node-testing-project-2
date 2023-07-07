const db = require("../../data/db-config");

const get = () => {
  return db("authors");
};

const getById = (author_id) => {
  return db("authors").where({ author_id: author_id }).first();
};

const getByName = (name) => {
  return db("authors").where({ name: name }).first();
};

const insert = (author) => {
  return db("authors")
    .insert(author)
    .then((ids) => {
      return getById(ids[0]);
    });
};

const update = (author, id) => {
  return db("authors")
    .where({ author_id: id })
    .update(author)
    .then((ids) => {
      return getById(id);
    });
};

const remove = async (id) => {
  const author = await db("authors").where({ author_id: id }).first();
  await db("authors").where({ author_id: id }).del();
  return author;
};

module.exports = { get, getById, getByName, insert, update, remove };
