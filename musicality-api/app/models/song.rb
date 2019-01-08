class Song < ApplicationRecord
    has_many :lyrics, dependent: :destroy
    validates :name, :artist, :chords, :presence => :true
end
