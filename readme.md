# Rdcl

Convert Integers to Strings and vice versa via radix with own charset. Like Base64, but any number and any set of characters.

## Usage

```
var rdcl = require("rdcl");

// create instance with own charset (optional)
var r = new rdcl("abcdef012345");

// encode int to string
r.encode(123456789);

// deoce string to int
r.decode("a1b2c3d4e5f6");

```

## License

[Unlicense](https://unlicense.org/UNLICENSE)
