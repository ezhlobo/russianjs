# RussianJS

### Table of content:
* [Getting started](#getting-started)
* [Features](#features)
  * [Pluralize](#russianpluralize-number--variants-)
* [Contributions](#contributions)

## Getting started

Writing is in progress.

## Features

Each feature is a class and it can be used separately.

### Russian.pluralize( number [, variants ])

It has alias: `Russian.p`.

1. __number__<br>
Type: Number or String<br>
2. __variants__<br>
Type: Array or Arguments

```js
Russian.pluralize( 3, [ "вещь", "вещи", "вещей" ]) // => "вещи"
```

Arguments are flexible. For example:

```js
Russian.p( 1, [ "вещь", "вещи", "вещей" ]);
Russian.p( "1", "вещь", "вещи", "вещей" );
Russian.p( "1.0", "вещь", "вещи", "вещей" );
// all three variants return "вещь"

Russian.p([ 5, 1, 3 ], [ "вещь", "вещи", "вещей" ]); // => [ "вещей", "вещь", "вещи" ]
```

If you want to use Pluralize class separetely, you can:
```js
var RussianPluralize = new Russian.Pluralize();
RussianPluralize.pluralize( 3, [ "вещь", "вещи", "вещей" ]) // => "вещи"
```

If you use pluralize in all parts of code with one variants array, recommend declare variants at start:
```js
var RussianPluralize = new Russian.Pluralize([ "вещь", "вещи", "вещей" ]);
RussianPluralize.pluralize( 3 ) // => "вещи"
```

## Contributions

Contribuitions always are welcome. RussianJS is written according to [jQuery Core Style Guide](http://docs.jquery.com/JQuery_Core_Style_Guidelines).

Feel free to fork and pull request changes.
