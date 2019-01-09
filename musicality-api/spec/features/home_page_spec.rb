require 'rails_helper'

describe 'Home Page', js: true do

    it 'displays an h1 tag with "Welcome to Musicality. Look around and find your muse."' do
        visit '/'

        expect(page).to have_content("Welcome to Musicality. Look around and find your muse.")
    end

end