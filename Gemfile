bundle # frozen_string_literal: true

source "https://rubygems.org"

gem "jekyll-theme-chirpy", "~> 7.0"
gem 'jekyll-compose', group: [:jekyll_plugins]

# Add csv and base64 gems if Ruby version is 3.3 or higher
if Gem::Version.new(RUBY_VERSION) >= Gem::Version.new('3.3')
  gem "csv", "~> 3.0"
  gem "base64", "~> 0.1.0" # Add base64 gem
end

group :test do
  gem "html-proofer", "~> 5.0"
end
