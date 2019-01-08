Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :songs, except: [:new, :edit] do
        resources :lyrics, except: [:new, :edit]
      end
    end
  end
end
