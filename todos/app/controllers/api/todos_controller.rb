class Api::TodosController < ApplicationController
  def index
    render json: Todo.all
  end

  def create
    newTodo = Todo.new(todos_params)
    if newTodo.save
      render json: newTodo
    else
      render json: newTodo.errors.full_messages, status: 422
    end
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update(todos_params)
    render json: @todo
  end

  def destroy
    render json: "Hi from destroy"
  end

  private
  def todos_params
    params.require(:todo).permit(:title, :body, :done, :id)
  end
end
