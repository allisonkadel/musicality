FactoryBot.define do
    factory :song do
        name { Faker::FamousLastWords.last_words }
        artist { Faker::Music.chord }
        chords "GEmCD"
    end
end