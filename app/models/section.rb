class Section < ActiveRecord::Base
  belongs_to :sound

  validates :start_time, presence: true
  validates :end_time, presence: true
  validates :name, presence: true
end
