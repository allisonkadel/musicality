class Api::V1::SongsController < ApplicationController

    before_action :set_song, :only => [:show, :update, :destroy]

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
        if @song.update(song_params)
            render :json => @song, :status => 200
        else
            render :json => { :message => song.errors }, :status => 400
        end
    end

    def destroy
        if @song.destroy
            render :status => 204
        else
            render :json => { 
                :songId => @song.id,
                :message => 'Unable to remove song' 
                }, :status => 400
        end
    end

    private

    def song_params
        params.require(:song).permit(:name,:artist,:chords)
    end

    def set_song
        @song = Song.find(params[:id])
    end

end
