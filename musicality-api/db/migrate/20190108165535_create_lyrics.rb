class CreateLyrics < ActiveRecord::Migration[5.2]
  def change
    create_table :lyrics do |t|
      t.string :chord
      t.text :text
      t.integer :song_id

      t.timestamps
    end
  end
end
