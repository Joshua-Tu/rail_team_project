Rails.application.routes.draw do
  devise_for :users
  resources :listings
  resources :users, only:[:index, :show, :edit, :update]

  # Root/Homepage
  get "/", to: "pages#home", as: "root"


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
