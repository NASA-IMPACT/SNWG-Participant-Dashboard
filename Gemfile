# frozen_string_literal: true

source "https://rubygems.org"

gem "jekyll-theme-chirpy", "~> 7.0"
gem 'jekyll-compose', group: [:jekyll_plugins]

if Gem::Version.new(RUBY_VERSION) >= Gem::Version.new('3.3')
  s.add_dependency("csv", "~> 3.0")
end

group :test do
  gem "html-proofer", "~> 5.0"
end
