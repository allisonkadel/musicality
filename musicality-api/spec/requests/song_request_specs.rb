require 'rails_helper'

RSpec.describe 'Songs API', :type => :request do

    # Initial Test Data
    let!(:songs) { FactoryBot.create_list(:song, 5)}
    let(:song_id) { songs.first.id }

    # GET /api/v1/songs
    # Returns collection of songs
    describe 'GET /api/v1/songs' do

        before { get '/api/v1/songs' }

        it 'returns a status code of 200' do
            expect(response).to have_http_status(200) # 200: found resource and return with success
        end

        it 'returns a collection of songs in JSON' do
            json = JSON.parse(response.body)
            expect(json).not_to be_empty
            expect(json.size).to eq(5)
        end
    end

    # POST /api/v1/songs
    # Creates a song and returns new song
    describe 'POST /api/v1/songs' do

        context 'when the request is valid' do

            before { post '/api/v1/songs', :params => valid_attrtributes }

            let(:valid_attrtributes) {
                {
                    :song => {
                        name: Faker::Music.album,
                        artist: Faker::Music.band,
                        chords: "GEmCD"
                    }
                }
            
            }

            it 'returns a status code of 201' do # 201: created a resource
                expect(response).to have_http_status(201)
            end

            it 'creates a song and returns it in JSON' do
                json = JSON.parse(response.body, symbolize_names: true)
                expect(json).not_to be_empty
                expect(json[:id]).not_to eq(nil)
                expect(json[:name]).to eq(valid_attrtributes[:song][:name])
                expect(json[:artist]).to eq(valid_attrtributes[:song][:artist])
                expect(json[:chords]).to eq(valid_attrtributes[:song][:chords])
            end
                    
        end

        context 'when the request is invalid' do

            before { post '/api/v1/songs', params: {
                song: {
                    name: '', artist: '', chords: ''
                }
            }}

            it 'returns a status code of 400' do
                expect(response).to have_http_status(400)
            end

            it 'returns the validation error messages in JSON' do
                json = JSON.parse(response.body, symbolize_names: true)
                puts 'json'
                expect(json).to_not be_empty
                expect(json[:errors][:messages]).to eq({
                    :name=>["can't be blank"],
                    :artist=>["can't be blank"],
                    :chords=>["can't be blank"]
                })
            end
            
        end

    end

    # GET /api/v1/songs/:id
    # Returns a Song
    describe 'GET /api/v1/songs/:id' do

        before { get "/api/v1/songs/#{song_id}" }

        it 'returns a status code of 200' do
            expect(response).to have_http_status(200) # 200: found resource and return with success
        end

        it 'returns a song in JSON' do
            json = JSON.parse(response.body)
            expect(json).not_to be_empty
            expect(json.size).to eq(5)
        end
    end

end