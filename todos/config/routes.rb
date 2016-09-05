Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :todos, only: [:index, :create, :update, :destroy] do
      resources :steps, only: [:index, :create, :destroy]
    end
    resources :steps, only: [:update]
  end


end
