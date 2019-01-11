class Api::V1::LyricsController < ApplicationController

    before_action :set_song, :only => [:show, :create, :destroy]

    def index
        song = Song.find(params[:song_id])

        render :json => song.lyrics, :status => 200
    end

    def create
        lyric = @song.lyrics.build(lyric_params)
        if lyric.save
            render :json => lyric, :status => 201
        else
            error_response(lyric)
        end
    end

    def update
        binding.pry
        if @lyric.update(lyric_params)
            render :json => @lyric, :status => 200
        else
            error_response(@lyric)
        end
    end

    def destroy
        if @lyric.destroy
            render :status => 204
        else
            error_response(@lyric)
        end
    end

    private

    def set_song
        @song = Song.find(params[:song_id])
    end

    def set_lyric
        @lyric = @song.lyrics.find(params[:id])
    end

    def lyric_params
        params.require(:lyric).permit(:text, :chord)
    end

end
