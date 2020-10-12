exports.seed = function (knex) {
  return knex('table_name').insert([
    { username: '', password: '' },
    { username: '', password: '' },
    { username: '', password: '' },
  ]);
};
