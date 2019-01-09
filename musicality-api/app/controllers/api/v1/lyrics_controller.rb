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

    # def update
    #     if @song.update(song_params)
    #         render :json => @song, :status => 200
    #     else
    #         render :json => { :message => song.errors }, :status => 400
    #     end
    # end

    def destroy
        lyric = @song.lyrics.find(params[:id])
        if lyric.destroy
            render :status => 204
        else
            error_response(lyric)
        end
    end

    private

    def set_song
        @song = Song.find(params[:song_id])
    end

    def lyric_params
        params.require(:lyric).permit(:text, :chord)
    end

end
