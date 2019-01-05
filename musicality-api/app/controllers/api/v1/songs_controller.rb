class Api::V1::SongsController < ApplicationController

    def index
        @songs = Song.all

        render :json => @songs, status: 200
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
