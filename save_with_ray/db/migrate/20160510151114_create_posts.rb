class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string   :name
      t.string   :body
      t.string   :link
      t.integer  :upvotes
      t.timestamps null: false
    end
  end
end
