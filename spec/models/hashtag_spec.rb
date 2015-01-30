require "rails_helper"

describe Hashtag do
	describe "::new" do
		it "can be instantiated" do
			h = Hashtag.new
			expect(h.class).to eq(Hashtag)
		end
	end

	#validations
	it { should validate_presence_of(:body)}

end