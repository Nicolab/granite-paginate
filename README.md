# granite-paginate


[![CI Status](https://github.com/Nicolab/granite-paginate/workflows/CI/badge.svg?branch=master)](https://github.com/Nicolab/granite-paginate/actions) [![GitHub release](https://img.shields.io/github/release/Nicolab/granite-paginate.svg)](https://github.com/Nicolab/granite-paginate/releases) [![Docs](https://img.shields.io/badge/docs-available-brightgreen.svg)](https://nicolab.github.io/granite-paginate/)

Crystal shard adding pagination support for Granite ORM.

## Installation

1. Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     granite-paginate:
       github: nicolab/granite-paginate
   ```

2. Run `shards install`

## Usage

Add (require) `granite-paginate` shard after Granite initialization.

```crystal
# TODO: Granite initialization here...

require "granite-paginate"

posts = Post.paginate.where(published: true)
posts = Post.where(published: true).paginate

posts = Post.order(:id).paginate
posts = Post.paginate.select

# Set the offset
posts = Post.order(:id).paginate(20)

# Custom limit
posts = Post.paginate(limit: 50)

# Custom offset and limit
posts = Post.paginate(3000, 100)
```

## Development

One line:

```sh
./scripts/develop
```

or splitted:

Terminal 1:

```sh
docker-compose up
```

Terminal 2:

```sh
# host
docker-compose exec app bash

# container
just develop
```

When you are done, check and clean the code:

```sh
# container
just clean
```

## Contributing

1. Fork it (<https://github.com/nicolab/granite-paginate/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## LICENSE

[MIT](https://github.com/Nicolab/granite-paginate/blob/master/LICENSE) (c) 2020, Nicolas Talle.

## Author

| [![Nicolas Tallefourtane - Nicolab.net](https://www.gravatar.com/avatar/d7dd0f4769f3aa48a3ecb308f0b457fc?s=64)](https://github.com/sponsors/Nicolab) |
|---|
| [Nicolas Talle](https://github.com/sponsors/Nicolab) |
| [![Make a donation via Paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PGRH4ZXP36GUC) |
