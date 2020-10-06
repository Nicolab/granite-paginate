# This file is part of "granite-paginate".
#
# This source code is licensed under the MIT license, please view the LICENSE
# file distributed with this source code. For the full
# information and documentation: https://github.com/Nicolab/granite-paginate
# ------------------------------------------------------------------------------

require "./spec_helper"

alias Paginate = Granite::Paginate

describe "Granite::Paginate.ensure_page" do
  it "should be returns default range" do
    offset, limit = Paginate.ensure_page

    offset.should eq 0
    limit.should eq 20

    offset, limit = Paginate.ensure_page 1000
    offset.should eq 1000
    limit.should eq 20

    offset, limit = Paginate.ensure_page limit: 50
    offset.should eq 0
    limit.should eq 50
  end

  it "should be returns default range with bad numbers" do
    offset, limit = Paginate.ensure_page nil
    offset.should eq 0
    limit.should eq 20

    offset, limit = Paginate.ensure_page -1
    offset.should eq 0
    limit.should eq 20

    offset, limit = Paginate.ensure_page nil, nil
    offset.should eq 0
    limit.should eq 20

    offset, limit = Paginate.ensure_page -1, -1
    offset.should eq 0
    limit.should eq 20

    offset, limit = Paginate.ensure_page -1, 101
    offset.should eq 0
    limit.should eq 20

    offset, limit = Paginate.ensure_page limit: 0
    offset.should eq 0
    limit.should eq 20
  end

  it "should returns cutom range" do
    offset, limit = Paginate.ensure_page 0, 100
    offset.should eq 0
    limit.should eq 100

    offset, limit = Paginate.ensure_page 1, 1
    offset.should eq 1
    limit.should eq 1

    offset, limit = Paginate.ensure_page 10, 10
    offset.should eq 10
    limit.should eq 10

    offset, limit = Paginate.ensure_page 40, 50
    offset.should eq 40
    limit.should eq 50

    offset, limit = Paginate.ensure_page 10
    offset.should eq 10
    limit.should eq 20

    offset, limit = Paginate.ensure_page 100_000, 40
    offset.should eq 100_000
    limit.should eq 40
  end
end

describe "Ext: Granite paginate" do
  # TODO: replace by before_all when it work (before_all doesn't work on 0.35.1)
  before_each {
    # create seed resources
    110.times do |i|
      post = Post.new
      post.i = i
      post.save!
    end

    Post.all.to_a.size.should eq 110
  }

  after_each {
    db = DB.open DB_URI
    begin
      # Use truncate instead if delete because it is more performant.
      # It is a specificity of postgres.
      db.exec "TRUNCATE posts"
    ensure
      db.close
    end
  }

  it "should paginate queries" do
    # basic
    Post.paginate.select.size.should eq 20

    # page 1
    posts = Post.paginate.order(:id).select
    posts.size.should eq 20
    first_id = posts.first.id.as(Int64)
    (first_id + 19).should eq posts.last.id

    # page 2
    posts = Post.paginate(20).order(:id).select
    posts.size.should eq 20
    (first_id + 39).should eq posts.last.id
  end

  it "should paginate query with default range" do
    posts = Post.order(:id).paginate.select
    posts.size.should eq 20
    (posts.first.id.as(Int64) + 19).should eq posts.last.id
  end

  it "should paginate query with custom range" do
    # offset
    posts = Post.order(:id).paginate(40).select
    posts.size.should eq 20
    (posts.first.id.as(Int64) + 19).should eq posts.last.id
    posts.first.id.should_not eq Post.order(:id).select.first.id
    posts.first.id.should eq Post.order(:id).offset(40).limit(20).select.first.id
    posts.last.id.should eq Post.order(:id).offset(40).limit(20).select.last.id

    # offset and limit
    posts = Post.order(:id).paginate(10, 100).select
    posts.size.should eq 100
    (posts.first.id.as(Int64) + 99).should eq posts.last.id
    posts.first.id.should_not eq Post.order(:id).select.first.id
    posts.first.id.should eq Post.order(:id).offset(10).limit(100).select.first.id
    posts.last.id.should eq Post.order(:id).offset(10).limit(100).select.last.id

    # limit
    posts = Post.order(:id).paginate(0, 40).select
    posts.size.should eq 40
    (posts.first.id.as(Int64) + 39).should eq posts.last.id
    posts.first.id.should eq Post.order(:id).select.first.id
    posts.last.id.should eq Post.order(:id).limit(40).select.last.id
  end

  it "should ensure offset and limit" do
    # offset
    posts = Post.order(:id).paginate(-1).select
    posts.size.should eq 20
    (posts.first.id.as(Int64) + 19).should eq posts.last.id
    posts.first.id.should eq Post.order(:id).select.first.id
    posts.last.id.should eq Post.order(:id).limit(20).select.last.id

    # limit
    posts = Post.order(:id).paginate(0, 101).select
    posts.size.should eq 20
    (posts.first.id.as(Int64) + 19).should eq posts.last.id
    posts.first.id.should eq Post.order(:id).select.first.id
    posts.last.id.should eq Post.order(:id).limit(20).select.last.id

    # offset and limit
    posts = Post.order(:id).paginate(-1, 101).select
    posts.size.should eq 20
    (posts.first.id.as(Int64) + 19).should eq posts.last.id
    posts.first.id.should eq Post.order(:id).select.first.id
    posts.last.id.should eq Post.order(:id).limit(20).select.last.id

    # nilable offset and limit
    posts = Post.order(:id).paginate(nil, nil).select
    posts.size.should eq 20
    (posts.first.id.as(Int64) + 19).should eq posts.last.id
    posts.first.id.should eq Post.order(:id).select.first.id
    posts.last.id.should eq Post.order(:id).limit(20).select.last.id
  end
end
