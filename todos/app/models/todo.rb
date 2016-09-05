class Todo < ActiveRecord::Base
  has_many :steps,
    class_name: "Step",
    foreign_key: :todo_id,
    primary_key: :id
end
