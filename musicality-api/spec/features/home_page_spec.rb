require 'rails_helper'

describe 'Home Page', js: true do

    it 'displays an h1 tag with "Welcome to Musicality. Look around and find your muse."' do
        visit 'http://localhost:3001'
        sleep 1
        # expect(page).to have_css("h1", text: "Welcome to Musicality")
        expect(page).to have_content("Welcome to Musicality. Look around and find your muse.")
    end

end

describe "GET '/' - homepage title", js: true do
    it 'welcomes the user to Word Nerds' do
      visit('http://localhost:3001')
      expect(page).to have_content("Word Nerds")
      puts 'the homepage title is Word Nerds'
    end
  end

describe "GET '/users' - from API", :type => :feature do
    it 'checks the first user in the database' do
      visit('http://192.168.1.31:3000/api/v1/songs')
      expect(page).to have_content("ABCF")
      puts 'cool, bob is in the house!'
    end
  end

  describe "GET Google homepage", :type => :feature do
    it 'welcomes the user to Google' do
      visit('https://www.google.com/')
      expect(page).to have_content("Google")
      puts " cool, Google's title is 'Google' "
    end
  end