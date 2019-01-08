require 'rails_helper'

RSpec.describe 'Songs API', :type => :request do

    # Initial Test Data
    let!(:songs) { FactoryBot.create_list(:song, 5)}

    # Returns collection of songs
    describe 'GET /api/v1/songs' do

        before { get '/api/v1/songs' }

        it 'returns a status code of 200' do
            expect(response).to have_http_status(200) # traditional response is 204
        end

        it 'returns a collection of songs in JSON' do
            json = JSON.parse(response.body)
            expect(json).not_to be_empty
            expect(json.size).to eq(5)
        end
    end

end