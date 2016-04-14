json.array!(@sections) do |section|
  json.extract! section, :id, :sound_id, :start_time, :end_time, :name
  json.url section_url(section, format: :json)
end
