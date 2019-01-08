FactoryBot.define do
    factory :song do
        name { Faker::Music.album }
        artist { Faker::Music.band }
        chords { "GEmCD" }
    end
end