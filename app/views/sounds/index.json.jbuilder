json.array!(@sounds) do |sound|
  json.extract! sound, :id, :filename, :name
  json.url sound_url(sound, format: :json)
end
