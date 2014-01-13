require 'rubygems'
require 'sinatra'


get '/' do
	erb :index	
end

get '/me' do
	"Ping pong!"
end