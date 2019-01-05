class Api::V1::SongsController < ApplicationController

    def index
        @songs = Song.all

        render :json => @songs, status: 200
    end

    def show

    end

    def update

    end

    def delete

    end

end
