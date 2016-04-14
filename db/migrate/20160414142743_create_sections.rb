class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.integer :sound_id
      t.integer :start_time
      t.integer :end_time
      t.string :name

      t.timestamps null: false
    end
  end
end
