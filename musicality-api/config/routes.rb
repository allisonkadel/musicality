Rails.application.routes.draw do
  namespace :api do
    resources :songs, except: [:new, :edit]
  end
end
