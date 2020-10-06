# This file is part of "granite-paginate".
#
# This source code is licensed under the MIT license, please view the LICENSE
# file distributed with this source code. For the full
# information and documentation: https://github.com/Nicolab/granite-paginate
# ------------------------------------------------------------------------------

# Pagination support for Granite.
module Granite::Paginate
  VERSION = "1.0.0"

  # Ensures good numbers for the pagination.
  def self.ensure_page(offset : Int32? = 0, limit : Int32? = 20) : {Int32, Int32}
    offset = 0 if offset.nil?
    limit = 0 if limit.nil?

    offset = 0 if offset < 0
    limit = 20 if limit < 1 || limit > 100

    {offset, limit}
  end
end

require "./ext/granite"
