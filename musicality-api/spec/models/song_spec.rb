require 'rails_helper'

RSpec.describe Song, :type => :model do

    context 'validations' do
        it { should validate_presence_of(:name) }
        it { should validate_presence_of(:artist) }
        it { should validate_presence_of(:chords) }
    end

end