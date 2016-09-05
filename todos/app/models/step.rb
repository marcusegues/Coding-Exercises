class Step < ActiveRecord::Base
  belongs_to :todo,
    class_name: "Todo",
    foreign_key: :todo_id,
    primary_key: :id
end
