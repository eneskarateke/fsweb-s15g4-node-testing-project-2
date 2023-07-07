const authors = [{ name: "Arthur Conan Doyle" }, { name: "Ernest Hemingway" }];

exports.seed = function (knex) {
  return knex("authors").insert(authors);
};
