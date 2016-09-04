class Api::TodosController < ApplicationController
  def index
    render json: Todo.all
  end

  def create
    newTodo = Todo.new(todos_params)
    if newTodo.save
      render json: newTodo
    else
      render json: newTodo.errors.full_messages, status: 400
    end
  end

  def update
    todo = Todo.find_by(todos_params)
    if todo && todo.update
      render json: todo, status: 200
    else
      render json: todo.errors.full_messages, status: 500
    end
  end

  def destroy
    render json: "Hi from destroy"
  end

  private
  def todos_params
    params.require(:todo).permit(:title, :body, :done, :id)
  end
end
