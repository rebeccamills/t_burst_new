class StaticPagesController < ApplicationController
  
  def home
  end

  def computer
  	trending = ["hello", "snow", "happy", "sad", "yolo", "bieber", "ff", "friday", "ice", "cold", "tgif", "lol",'hi','birthday']
	random_tweet = trending.sample
	@computer_choice = {tag: random_tweet}


	#make a call to /computer.json
  	respond_to do |format|
  		format.json { render json: @computer_choice }
  	end
  end

end