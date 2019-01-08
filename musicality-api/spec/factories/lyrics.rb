FactoryBot.define do
    factory :lyric do
        text { Faker::FamousLastWords.last_words }
        chord { Faker::Music.chord }
    end
end