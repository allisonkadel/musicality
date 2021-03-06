require 'rails_helper'

RSpec.describe Song, :type => :model do

    context 'validations' do
        it { should validate_presence_of(:name) }
        it { should validate_presence_of(:artist) }
        it { should validate_presence_of(:chords) }
        # add validation test for chords being among ABCDEFG
    end

    context 'relationships' do
        it { should have_many(:lyrics).dependent(:destroy) }
    end

end