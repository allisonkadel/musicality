class LyricSerializer < ActiveModel::Serializer
  attributes :id, :text, :chord
  belongs_to :song
end
