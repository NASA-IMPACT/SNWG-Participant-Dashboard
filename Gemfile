# frozen_string_literal: true

source "https://rubygems.org"

gem "jekyll-theme-chirpy", "~> 7.0"
gem "jekyll-compose", group: [:jekyll_plugins]
gem "wdm", ">= 0.1.0" if Gem.win_platform?
gem "jekyll-sitemap"
gem "jekyll-data"
gem "jekyll-feed"
gem "tzinfo" # Add tzinfo gem
gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby] # Add tzinfo-data for Windows compatibility

# Add csv and base64 gems if Ruby version is 3.3 or higher
if Gem::Version.new(RUBY_VERSION) >= Gem::Version.new('3.3')
  gem "csv", "~> 3.0"
  gem "base64", "~> 0.1.0" # Add base64 gem
end

group :test do
  gem "html-proofer", "~> 5.0"
end
