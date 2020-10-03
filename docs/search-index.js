crystal_doc_search_index_callback({"repository_name":"granite-paginate","body":"# granite-paginate\n\n[![Build Status](https://travis-ci.com/Nicolab/granite-paginate.svg?branch=master)](https://travis-ci.com/Nicolab/granite-paginate) [![GitHub release](https://img.shields.io/github/release/Nicolab/granite-paginate.svg)](https://github.com/Nicolab/granite-paginate/releases) [![Docs](https://img.shields.io/badge/docs-available-brightgreen.svg)](https://nicolab.github.io/granite-paginate/)\n\nCrystal shard adding pagination support for Granite ORM.\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n   ```yaml\n   dependencies:\n     granite-paginate:\n       github: nicolab/granite-paginate\n   ```\n\n2. Run `shards install`\n\n## Usage\n\nAdd (require) `granite-paginate` shard after the Granite initialization.\n\n```crystal\n# TODO: Granite initialization here...\n\nrequire \"granite-paginate\"\n\nposts = Post.paginate.where(published: true)\nposts = Post.where(published: true).paginate\n\nposts = Post.order(:id).paginate\nposts = Post.paginate.select\n\n# Set the offset\nposts = Post.order(:id).paginate(20)\n\n# Custom limit\nposts = Post.paginate(limit: 50)\n\n# Custom offset and limit\nposts = Post.paginate(3000, 100)\n```\n\n## Development\n\nTerminal 1:\n\n```sh\ndocker-compose up\n```\n\nTerminal 2:\n\n```sh\n# host\ndocker-compose exec app bash\n\n# container\njust develop\n```\n\nWhen you are done, check and clean the code:\n\n```sh\n# container\njust clean\n```\n\n## Contributing\n\n1. Fork it (<https://github.com/nicolab/granite-paginate/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## LICENSE\n\n[MIT](https://github.com/Nicolab/granite-paginate/blob/master/LICENSE) (c) 2020, Nicolas Talle.\n\n## Author\n\n| [![Nicolas Tallefourtane - Nicolab.net](https://www.gravatar.com/avatar/d7dd0f4769f3aa48a3ecb308f0b457fc?s=64)](https://github.com/sponsors/Nicolab) |\n|---|\n| [Nicolas Talle](https://github.com/sponsors/Nicolab) |\n| [![Make a donation via Paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PGRH4ZXP36GUC) |\n","program":{"html_id":"granite-paginate/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"granite-paginate","program":true,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"granite-paginate/Granite","path":"Granite.html","kind":"module","full_name":"Granite","name":"Granite","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"granite-paginate","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"granite-paginate/Granite/Paginate","path":"Granite/Paginate.html","kind":"module","full_name":"Granite::Paginate","name":"Paginate","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"granite-paginate","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"\"1.0.0\"","doc":null,"summary":null}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"granite-paginate/Granite","kind":"module","full_name":"Granite","name":"Granite"},"doc":"Pagination support for Granite.","summary":"<p>Pagination support for Granite.</p>","class_methods":[{"id":"ensure_page(offset:Int32=0,limit:Int32=20):Tuple(Int32,Int32)-class-method","html_id":"ensure_page(offset:Int32=0,limit:Int32=20):Tuple(Int32,Int32)-class-method","name":"ensure_page","doc":"Ensures good numbers for the pagination.","summary":"<p>Ensures good numbers for the pagination.</p>","abstract":false,"args":[{"name":"offset","doc":null,"default_value":"0","external_name":"offset","restriction":"Int32"},{"name":"limit","doc":null,"default_value":"20","external_name":"limit","restriction":"Int32"}],"args_string":"(offset : Int32 = <span class=\"n\">0</span>, limit : Int32 = <span class=\"n\">20</span>) : Tuple(Int32, Int32)","source_link":null,"def":{"name":"ensure_page","args":[{"name":"offset","doc":null,"default_value":"0","external_name":"offset","restriction":"Int32"},{"name":"limit","doc":null,"default_value":"20","external_name":"limit","restriction":"Int32"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"::Tuple(Int32, Int32)","visibility":"Public","body":"if offset < 0\n  offset = 0\nend\nif limit < 1 || limit > 100\n  limit = 20\nend\n{offset, limit}\n"}}],"constructors":[],"instance_methods":[],"macros":[],"types":[]},{"html_id":"granite-paginate/Granite/Query","path":"Granite/Query.html","kind":"module","full_name":"Granite::Query","name":"Query","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"granite-paginate","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"granite-paginate/Granite","kind":"module","full_name":"Granite","name":"Granite"},"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"granite-paginate/Granite/Query/Builder","path":"Granite/Query/Builder.html","kind":"class","full_name":"Granite::Query::Builder(Model)","name":"Builder","abstract":false,"superclass":{"html_id":"granite-paginate/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"granite-paginate/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"granite-paginate/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[],"repository_name":"granite-paginate","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"granite-paginate/Granite/Query","kind":"module","full_name":"Granite::Query","name":"Query"},"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[{"id":"paginate(offset:Int32=0,limit:Int32=20)-instance-method","html_id":"paginate(offset:Int32=0,limit:Int32=20)-instance-method","name":"paginate","doc":"Paginate the query.","summary":"<p>Paginate the query.</p>","abstract":false,"args":[{"name":"offset","doc":null,"default_value":"0","external_name":"offset","restriction":"Int32"},{"name":"limit","doc":null,"default_value":"20","external_name":"limit","restriction":"Int32"}],"args_string":"(offset : Int32 = <span class=\"n\">0</span>, limit : Int32 = <span class=\"n\">20</span>)","source_link":null,"def":{"name":"paginate","args":[{"name":"offset","doc":null,"default_value":"0","external_name":"offset","restriction":"Int32"},{"name":"limit","doc":null,"default_value":"20","external_name":"limit","restriction":"Int32"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"offset, limit = Granite::Paginate.ensure_page(offset, limit)\n(self.offset(offset)).limit(limit)\n"}}],"macros":[],"types":[]},{"html_id":"granite-paginate/Granite/Query/BuilderMethods","path":"Granite/Query/BuilderMethods.html","kind":"module","full_name":"Granite::Query::BuilderMethods","name":"BuilderMethods","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"granite-paginate","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"granite-paginate/Granite/Query","kind":"module","full_name":"Granite::Query","name":"Query"},"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[{"id":"paginate(*args,**options)-instance-method","html_id":"paginate(*args,**options)-instance-method","name":"paginate","doc":null,"summary":null,"abstract":false,"args":[{"name":"args","doc":null,"default_value":"","external_name":"args","restriction":""}],"args_string":"(*args, **options)","source_link":null,"def":{"name":"paginate","args":[{"name":"args","doc":null,"default_value":"","external_name":"args","restriction":""}],"double_splat":{"name":"options","doc":null,"default_value":"","external_name":"options","restriction":""},"splat_index":0,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"__builder.paginate(*args, **options)"}},{"id":"paginate(*args,**options,&)-instance-method","html_id":"paginate(*args,**options,&)-instance-method","name":"paginate","doc":null,"summary":null,"abstract":false,"args":[{"name":"args","doc":null,"default_value":"","external_name":"args","restriction":""}],"args_string":"(*args, **options, &)","source_link":null,"def":{"name":"paginate","args":[{"name":"args","doc":null,"default_value":"","external_name":"args","restriction":""}],"double_splat":{"name":"options","doc":null,"default_value":"","external_name":"options","restriction":""},"splat_index":0,"yields":1,"block_arg":null,"return_type":"","visibility":"Public","body":"__builder.paginate(*args, **options) do |*yield_args|\n  yield *yield_args\nend"}}],"macros":[],"types":[]}]}]}]}})