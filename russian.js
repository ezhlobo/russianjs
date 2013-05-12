(function( window ) {

	var Russian, Pluralize, isArray;

	isArray = Array.isArray || function( o ) {
		return o && Object.prototype.toString.call( o ) === "[object Array]";
	};

	Russian = function() {
		var root = this;

		root.p = root.pluralize = new Pluralize();

		return root;
	};

	Pluralize = function() {
		var pluralize;

		pluralize = function( number ) {
			var type, variants_arr, variants_hash, mod10, mod100;

			if ( isArray( number ) ) {
				var result = [],
					variants = [].slice.call( arguments, 1 )[ 0 ],
					i = 0,
					l = number.length;

				// Is array empty? (simple check)
				if ( l === 0 ) {
					return "";
				}

				for ( ; i < l; i++ ) {
					var newArguments = [ variants ];
					newArguments.unshift( number[ i ] );

					result.push( pluralize.apply( this, newArguments ) );
				}

				return result;
			}

			number = parseFloat( number );

			if ( !number && number !== 0 ) {
				return "";
			}

			variants_arr = isArray( arguments[ 1 ] ) ? arguments[ 1 ] : [].slice.call( arguments, 1 );
			variants_hash = pluralize.toHash( variants_arr );

			mod10 = number % 10;
			mod100 = number % 100;

			if ( mod10 === 1 && mod100 !== 11 ) {
				type = "one";
			} else if ( ( mod10 === 2 || mod10 === 3 || mod10 === 4 ) && !( mod100 === 12 || mod100 === 13 || mod100 === 14 ) ) {
				type = "few";
			} else if ( mod10 === 0 || mod10 === 5 || mod10 === 6 || mod10 === 7 || mod10 === 8 || mod10 === 9 || mod100 === 11 || mod100 === 12 || mod100 === 13 || mod100 === 14 ) {
				type = "many";
			} else {
				type = "other";
			}

			return variants_hash[ type ] || "";
		};

		pluralize.toHash = function( variants ) {
			return {
				"one": variants[ 0 ],
				"few": variants[ 1 ],
				"many": variants[ 2 ],
				"other": variants[ 3 ]
			};
		};

		return pluralize;
	};

	window.Russian = new Russian();

}( window ));
