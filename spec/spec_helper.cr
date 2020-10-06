# This file is part of "granite-paginate".
#
# This source code is licensed under the MIT license, please view the LICENSE
# file distributed with this source code. For the full
# information and documentation: https://github.com/Nicolab/granite-paginate
# ------------------------------------------------------------------------------

require "spec"
require "granite/adapter/pg"
require "../src/granite-paginate"

DB_URI = ENV["DB_URI"]

Granite::Connections << Granite::Adapter::Pg.new(name: "pg", url: DB_URI)

class Post < Granite::Base
  connection pg
  table "posts"
  column id : Int64, primary: true
  column i : Int32
end

{% for model in Granite::Base.all_subclasses %}
  {{model.id}}.migrator.drop_and_create
{% end %}
