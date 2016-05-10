class CreatePosts < ActiveRecord::Migration
	def change
		create_table :posts do |t|
			t.string     :title
			t.string     :link
			t.string     :body
			t.integer    :upvotes
			t.timestamps  null: false
		end
	end
end
