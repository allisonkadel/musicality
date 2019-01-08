class Lyric < ApplicationRecord
    belongs_to :song
    validates :text, :chord, :presence => :true
    validates :chord, :inclusion => {:in => %w[A B C D E F G Am Bm Cm Dm Em Fm Gm] }
end
