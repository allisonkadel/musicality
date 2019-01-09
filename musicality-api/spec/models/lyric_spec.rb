require 'rails_helper'

RSpec.describe Lyric, :type => :model do

    context 'validations' do
        it { should validate_presence_of(:text) }
        it { should validate_presence_of(:chord) }
        # it { should validate_inclusion_of(:chord).in_array(%w[A B C D E F G Am Bm Cm Dm Em Fm Gm]) }
    end

    context 'relationships' do
        it { should belong_to(:song) }
    end


end