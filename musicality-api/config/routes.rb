Rails.application.routes.draw do

  root to: 'welcome#home'

  namespace :api do
    namespace :v1 do
      resources :songs, except: [:new, :edit] do
        resources :lyrics, except: [:new, :edit, :update, :show]
      end
    end
  end
end
