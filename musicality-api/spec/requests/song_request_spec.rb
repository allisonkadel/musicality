require 'rails_helper'

RSpec.describe 'Songs API', :type => :request do

    # Initial Test Data
    let!(:songs) { FactoryBot.create_list(:song, 5)}
    let(:song_id) { songs.first.id }
    # json is defined in request_spec_helper.rb

    # GET /api/v1/songs
    # Returns collection of songs
    describe 'GET /api/v1/songs' do

        before { get '/api/v1/songs' }

        it 'returns a status code of 200' do
            expect(response).to have_http_status(200) #=> 200: found resource and return with success
        end

        it 'returns a collection of songs in JSON' do
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

            it 'returns a status code of 201' do #=> 201: created a resource
                expect(response).to have_http_status(201)
            end

            it 'creates a song and returns it in JSON' do
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

        context 'if song exists' do

            before { get "/api/v1/songs/#{song_id}" }

            it 'returns a status code of 200' do
                expect(response).to have_http_status(200) #=> 200: found resource and return with success
            end

            it 'returns a song in JSON' do
                expect(json).not_to be_empty
                expect(json[:id]).to eq(song_id)
                expect(json[:name]).to eq(songs.first.name)
                expect(json[:artist]).to eq(songs.first.artist)
            end

        end

        context 'if song does not exist' do

            # This is currently being handled by ActiveRecord and rescued
            # to create uniform response shape

            before { get "/api/v1/songs/nonexistent_song" }

            it 'returns a status code of 404' do
                expect(response).to have_http_status(404)
            end

            it 'returns an error message of not found in JSON' do
                expect(json).to_not be_empty
                expect(json[:errors][:messages]).to eq("record can't be found")
            end

        end

    end

    # PUT /api/v1/songs/:id
    # Updates and Returns the Song Matching the Parameters Id
    describe 'PATCH /api/v1/song/:id' do

        describe 'if song exists' do

            context 'and has valid attributes' do

                let(:valid_attrtributes) {
                    {
                        :song => {
                            name: "Updated Title",
                            artist: "Updated Artist",
                            chords: "GEmCD"
                        }
                    }
                }

                before { patch "/api/v1/songs/#{song_id}", params: valid_attrtributes }
                
                it 'updates the song' do
                    expect(json[:name]).to eq(valid_attrtributes[:song][:name])
                    expect(json[:artist]).to eq(valid_attrtributes[:song][:artist])
                    expect(json[:chords]).to eq(valid_attrtributes[:song][:chords])
                end

                it 'returns a status code of 200' do #=> 200: returning a resource
                    expect(response).to have_http_status(200)
                end

            end

            context 'and has invalid attributes' do

                let(:invalid_attrtributes) {
                    {
                        :song => {
                            name: "",
                            artist: "",
                            chords: ""
                        }
                    }
                }

                before { patch "/api/v1/songs/#{song_id}", params: invalid_attrtributes }
                
                it 'returns a status code of 400' do
                    expect(response).to have_http_status(400)
                end
    
                it 'returns the validation error messages in JSON' do
                    expect(json).to_not be_empty
                    expect(json[:errors][:messages]).to eq({
                        :name=>["can't be blank"],
                        :artist=>["can't be blank"],
                        :chords=>["can't be blank"]
                    })
                end
                
            end

        end

        context 'if song is not found' do

            before { patch "/api/v1/songs/nonexistent_song" }

            it 'returns a status code of 404' do
                expect(response).to have_http_status(404)
            end

            it 'returns error messages of not found in JSON' do
                expect(json).to_not be_empty
                expect(json[:errors][:messages]).to eq("record can't be found")
            end

        end

    end

end