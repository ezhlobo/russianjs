# RussianJS

### Table of content:
* [Getting started](#getting-started)
* [Features](#features)
* [Contributions](#contributions)

## Getting started

Writing is in progress.

## Features
```js
Russian.pluralize( num, variants );
// or alias
Russian.p( num, variants );
```

Arguments are flexible. For example:

```js
Russian.p( 1, [ "вещь", "вещи", "вещей" ]);
Russian.p( "1", "вещь", "вещи", "вещей" );
Russian.p( "1.0", "вещь", "вещи", "вещей" );
// all three variants return "вещь"
```

## Contributions

Contribuitions always are welcome. RussianJS is written according to [jQuery Core Style Guide](http://docs.jquery.com/JQuery_Core_Style_Guidelines).

Feel free to fork and pull request changes.
