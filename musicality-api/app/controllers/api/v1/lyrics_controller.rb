class Api::V1::LyricsController < ApplicationController

    before_action :set_lyric, :only => [:show, :update, :destroy]

    def index
        song = Song.find(params[:song_id])
        lyrics = song.lyrics

        render :json => lyrics, :status => 200
    end

    def create
        lyric = Lyric.new(:chord => params[:chord],:text => params[:text],:song_id => params[:song_id])
        if lyric.save
            render :json => lyric, :status => 200
        else
            render :json => { :message => lyric.errors }, :status => 400
        end
    end

    # def update
    #     if @song.update(song_params)
    #         render :json => @song, :status => 200
    #     else
    #         render :json => { :message => song.errors }, :status => 400
    #     end
    # end

    # def destroy
    #     binding.pry
    #     if @song.destroy
    #         render :status => 204
    #     else
    #         render :json => { 
    #             :songId => @song.id,
    #             :message => 'Unable to remove song' 
    #             }, :status => 400
    #     end
    # end

end
