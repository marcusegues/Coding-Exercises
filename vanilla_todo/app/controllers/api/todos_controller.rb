class Api::TodosController < ApplicationController
  def index
    render json: Todo.all
  end

  def create
    todo = Todo.new(todo_params)
    if todo.save
      render json: todo
    else
      render json: todo.error.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    todo = Todo.find(params[:id])
    if todo
      todo.destroy
      render json: todo
    else
      render json: ["Could not find the todo"], status: 400
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :done)
  end
end
