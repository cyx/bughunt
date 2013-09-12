app = lambda do |env|
  [200, { 'content-type' => 'text/plain' }, ['hello']]
end

run app
