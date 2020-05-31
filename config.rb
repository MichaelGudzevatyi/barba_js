activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
page '/404.html', :directory_index => false
page "/oneview/index.php", :directory_index => false

# Pretty URLs
activate :directory_indexes

# LiveReload
activate :livereload

config[:sass_source_maps] = true
# config[:server_name] = "localhost"


require 'sprockets/es6'
activate :sprockets do |s|
  s.supported_output_extensions << '.es6'
end


configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :minify_html
  activate :relative_assets
end
