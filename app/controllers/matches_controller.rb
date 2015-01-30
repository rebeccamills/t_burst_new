require 'pry'

class MatchesController < ApplicationController
  
  def show

  end

  def create
  @current_user ||= User.find(session[:user_id]) if session[:user_id]

    if match_params[:hashtag_one_body] && match_params[:hashtag_two_body]
      #create a new hashtag 1 if one doesn't already exist
      @hashtag_one = Hashtag.find_or_create_by(body: match_params[:hashtag_one_body])
      #create a new hashtag 2 if one doesn't already exist
      @hashtag_two = Hashtag.find_or_create_by(body: match_params[:hashtag_two_body])
      #create the new match
      @match = Match.new
      #if it's a win/loss situation
      if match_params[:winning_player] || match_params[:losing_player]
        #players
        if match_params[:winning_player] == 'user'
          #if the winner was the current user
          @match.winning_player_id = @current_user.id
          #increment the current user leaderboard by 1
          @current_user.leaderboard.win_count += 1
          @current_user.leaderboard.save
        elsif match_params[:losing_player]
          @match.losing_player_id = @current_user.id
        end
        #hashtags
        @match.winning_hashtag_id = @hashtag_one.id 
        @match.losing_hashtag_id = @hashtag_two.id
        #scores
        @match.winning_hashtag_score = match_params[:winning_hashtag_score]
        @match.losing_hashtag_score = match_params[:losing_hashtag_score]
      #if it's a tie
      elsif match_params[:tie_score]
        #players
        @match.tie_player_one_id = @current_user.id
        #hashtags
        @match.winning_hashtag_id = @hashtag_one.id 
        @match.losing_hashtag_id = @hashtag_two.id
        #scores
        @match.tie_score = match_params[:tie_score]
      end
      #save the match
      @match.save
      #binding.pry
    end
    render nothing: true
  end

  private

    def match_params
      params.require(:match).permit(:winning_player, :losing_player, :winning_hashtag_score, :losing_hashtag_score, :tie_player_one, :tie_score, :hashtag_one_body, :hashtag_two_body)
    end
end