# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Todo.create([
  {title: "Stretch", body: "Do some stretching to alleviate back pain.", done: false},
  {title: "Wash dishes", body: "Wash those dishes", done: true}
]);

Step.create([
  {title: "Hamstrings", todo_id: 1, done: false},
  {title: "Quads", todo_id: 1, done: false},
  {title: "Also the pans", todo_id: 2, done: false},
]);
