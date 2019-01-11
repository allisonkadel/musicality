Rails.application.routes.draw do

  root to: 'welcome#home'

  namespace :api do
    namespace :v1 do
      resources :songs, except: [:new, :edit, :update] do
        resources :lyrics, except: [:new, :edit, :show]
      end
    end
  end
end
