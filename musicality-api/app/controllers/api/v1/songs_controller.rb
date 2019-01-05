class Api::V1::SongsController < ApplicationController

    def index
        @songs = Song.all

        render :json => @songs, :status => 200
    end

    def create
        song = song.new(song_params)
        if song.save
            render :json => song, :status => 200
        else
            render :json => { :message => song.errors }, :status => 400
        end
    end

    def show
        render :json => @song, status: 200
    end

    def update

    end

    def delete

    end

    private

    def find_song
        @song = Song.find(params[:id])
    end

end
