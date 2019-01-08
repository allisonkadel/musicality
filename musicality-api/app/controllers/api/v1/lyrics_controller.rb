class Api::V1::LyricsController < ApplicationController

    before_action :set_lyric, :only => [:show, :update, :destroy]

    def index
        @lyrics = Lyric.all

        render :json => @lyrics, :status => 200
    end

    def create
        song = Song.new(song_params)
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
        binding.pry
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