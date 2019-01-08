class Song < ApplicationRecord
    has_many :lyrics
    validates :name, :artist, :chords, :presence => :true
end
