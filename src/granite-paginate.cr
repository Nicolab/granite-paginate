# This file is part of "granite-paginate".
#
# This source code is licensed under the MIT license, please view the LICENSE
# file distributed with this source code. For the full
# information and documentation: https://github.com/Nicolab/granite-paginate
# ------------------------------------------------------------------------------

# Pagination support for Granite.
module Granite::Paginate
  VERSION = {{ `shards version "#{__DIR__}"`.chomp.stringify.downcase }}

  # Returns *num* as `Int32` if resolved, `0` as `Int32` if unresolved.
  private def self.resolve_num(num : Int32 | String | Nil) : Int32
    return num if num.is_a? Int32
    return 0 if num.nil?

    num = num.to_i
  rescue
    num = 0

    num
  end

  # Ensures good numbers for the pagination.
  def self.ensure_page(
    offset : Int32 | String | Nil = 0,
    limit : Int32 | String | Nil = 20
  ) : {Int32, Int32}
    offset = self.resolve_num offset
    limit = self.resolve_num limit

    offset = 0 if offset < 0
    limit = 20 if limit < 1 || limit > 100

    {offset, limit}
  end
end

require "./ext/granite"
