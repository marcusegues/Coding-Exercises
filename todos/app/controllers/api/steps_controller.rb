class Api::StepsController < ApplicationController
  def index
    todo = Todo.find(params[:todo_id])
    render json: todo.steps
  end

  def create
    step = Step.new(steps_params)
    if step.save
      render json: step
    else
      render json: step.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
  end

  def update
    step = Step.find(params[:id])
    if step
      if step.update(steps_params)
        render json: step
      else
        render json: step.errors.full_messages
      end
    else
      render json: ["Could not find the step"], status: 400
    end
  end

  private

  def steps_params
    params.require(:step).permit(:title, :todo_id, :done)
  end

end
