# production.rb
set :rails_env, :production

# Настраиваем ssh до сервера
server "<--input production host-->", :app, :web, :db, :primary => true

# Авторизационные данные
set :user, "XxX"
set :group, "XxX"
set :password, '<--password-->'
set :keep_releases, 5
set :repository, 'prod'
