# This file is part of "granite-paginate".
#
# This source code is licensed under the MIT license, please view the LICENSE
# file distributed with this source code. For the full
# information and documentation: https://github.com/Nicolab/granite-paginate
# ------------------------------------------------------------------------------

module Granite::Query::BuilderMethods
  delegate paginate, to: __builder
end

class Granite::Query::Builder(Model)
  # Paginate the query.
  def paginate(
    offset : Int32 | String | Nil = 0,
    limit : Int32 | String | Nil = 20
  )
    offset, limit = Granite::Paginate.ensure_page(offset, limit)
    self.offset(offset).limit(limit)
  end
end
