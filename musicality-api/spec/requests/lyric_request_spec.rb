require 'rails_helper'

RSpec.describe 'Lyrics API', :type => :request do

    # Initial Test Data
    let!(:song) { FactoryBot.create(:song)}
    let!(:lyrics) { FactoryBot.create_list(:lyric, 5, song_id: song_id)}
    let(:song_id) { song.id }
    let(:lyric_id) { lyrics.first.id }

    # json is defined in request_spec_helper.rb

    # GET /api/v1/songs/:song_id/lyrics
    describe 'GET /api/v1/songs/:song_id/lyrics' do

        context 'if song exists' do

            # create another lyric belonging to song
            before(:each) {
                FactoryBot.create(:lyric, song_id: song_id)
            }

            before { get "/api/v1/songs/#{song_id}/lyrics" }

            it 'returns a status code of 200' do
                expect(response).to have_http_status(200)
            end

            it 'returns all of the song lyrics in JSON' do
                expect(json.size).to eq(6)
                expect(json[0][:id]).not_to eq(nil)
            end

        end

        context 'if song is not found' do

            before { get '/api/v1/songs/nonexistend_song/lyrics' }

            it 'returns a status code of 404' do
                expect(response).to have_http_status(404)
            end

            it 'returns error messages of not found in json' do
                expect(json).to_not be_empty
                expect(json[:errors][:messages]).to eq("record can't be found")
            end

        end

    end

    # POST /api/v1/songs/:song_id/lyrics
    describe 'POST /api/v1/songs/:song_id/lyrics' do

        describe 'if song exists' do

            context 'if attributes are valid' do

                let(:valid_attributes) {
                    {
                        :lyric => {
                            text: Faker::FamousLastWords.last_words,
                            chord: Faker::Music.chord
                        }
                    }
                }

                before { post "/api/v1/songs/#{song_id}/lyrics", :params => valid_attributes }

                it 'returns a status code of 201' do
                    expect(response).to have_http_status(201)
                end
    
                it 'returns the newly created lyric in JSON' do
                    expect(json).not_to be_empty
                    expect(json[:id]).not_to eq(nil)
                    expect(json[:text]).not_to eq(nil)
                    expect(json[:chord]).not_to eq(nil)
                end
            end

            context 'if attributes are invalid' do

                before { post "/api/v1/songs/#{song_id}/lyrics", params: {
                    lyric: {
                        text: '', chord: ''
                    }
                }}

                it 'returns a status code of 400' do
                    expect(response).to have_http_status(400)
                end

                it 'returns the validation error messages in JSON' do
                    expect(json).to_not be_empty
                    expect(json[:errors][:messages]).to eq({
                        :text=>["can't be blank"],
                        :chord=>["can't be blank"],
                    })
                end

            end


        end

        context 'if song is not found' do

            before { get '/api/v1/songs/nonexistend_song/lyrics' }

            it 'returns a status code of 404' do
                expect(response).to have_http_status(404)
            end

            it 'returns error messages of not found in json' do
                expect(json).to_not be_empty
                expect(json[:errors][:messages]).to eq("record can't be found")
            end

        end
    end

    # DELETE /api/v1/songs/:song_id/lyrics/:id
    # Destroys the Lyric Matching the Parameter Id
    describe 'DELETE /api/v1/songs/:song_id/lyrics/:id' do

        context 'if song exists' do

            context 'and lyric exists' do

                before { delete "/api/v1/songs/#{song_id}/lyrics/#{lyric_id}" }

                it 'returns a status code of 204' do
                    expect(response).to have_http_status(204)
                end

            end

            context 'and lyric is not found' do

                # change record to be more specific(song or lyric) -> problem 
                # with rescuing ActiveRecord builtin errors

                before { delete "/api/v1/songs/#{song_id}/lyrics/nonexistent_lyric" }

                it 'returns a status code of 404' do
                    expect(response).to have_http_status(404)
                end

                it 'returns error messages of not found in json' do
                    expect(json).to_not be_empty
                    expect(json[:errors][:messages]).to eq("record can't be found")
                end
            end

        end

        context 'if song is not found' do

            before { delete '/api/v1/songs/nonexistend_song' }

            it 'returns a status code of 404' do
                expect(response).to have_http_status(404)
            end

            it 'returns error messages of not found in json' do
                expect(json).to_not be_empty
                expect(json[:errors][:messages]).to eq("record can't be found")
            end

        end

    end

end