class Api::TodosController < ApplicationController
  def index
    render json: ["Hi from index"]
  end

  def create
    render json: ["Hi from create"]
  end

  def update
    render json: "Hi from update"
  end

  def destroy
    render json: "Hi from destroy"
  end
end
