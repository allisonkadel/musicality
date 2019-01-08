class Lyric < ApplicationRecord
    belongs_to :song
    validates :text, :chord, :presence => :true
end
