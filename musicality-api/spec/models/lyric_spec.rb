require 'rails_helper'

RSpec.describe Lyric, :type => :model do

    context 'validations' do
        it { should validate_presence_of(:text) }
        it { should validate_presence_of(:chord) }
    end


end