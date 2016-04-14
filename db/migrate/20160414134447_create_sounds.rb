class CreateSounds < ActiveRecord::Migration
  def change
    create_table :sounds do |t|
      t.string :filename
      t.string :name

      t.timestamps null: false
    end
  end
end
