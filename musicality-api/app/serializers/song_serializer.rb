class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :chords
  has_many :lyrics
end
