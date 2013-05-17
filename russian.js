(function() {

	var Russian, Pluralize,

		prototype = "prototype",

		isArray = Array.isArray || function( obj ) {
			return obj && Object[ prototype ].toString.call( obj ) === "[object Array]";
		},

		extendBy = function( plugin, name ) {
			var method,
				newPlugin = new plugin();

			Russian[ prototype ][ name ] = plugin;

			for ( method in plugin[ prototype ] ) {
				if ( plugin[ prototype ].hasOwnProperty( method ) ) {
					Russian[ prototype ][ method ] = plugin[ prototype ][ method ].bind( newPlugin );
				}
			}
		};

	Russian = function() {};

	Pluralize = (function() {
		function Pluralize( variants ) {
			this.variants = isArray( variants ) ? variants : [].slice.call( arguments );
		}

		Pluralize[ prototype ].p = Pluralize[ prototype ].pluralize = function( number ) {
			var type, variant, mod10, mod100;

			if ( isArray( number ) ) {
				var result = [],
					variants = [].slice.call( arguments, 1 )[ 0 ],
					i = 0,
					l = number.length;

				// Is array empty? (check length only)
				if ( l === 0 ) {
					return "";
				}

				for ( ; i < l; i++ ) {
					var newArguments = [ variants ];
					newArguments.unshift( number[ i ] );

					result.push( this.pluralize.apply( this, newArguments ) );
				}

				return result;
			}

			number = parseFloat( number );

			if ( !number && number !== 0 ) {
				return "";
			}

			mod10 = number % 10;
			mod100 = number % 100;

			if ( mod10 === 1 && mod100 !== 11 ) {
				type = 0;
			} else if ( ( mod10 === 2 || mod10 === 3 || mod10 === 4 ) && !( mod100 === 12 || mod100 === 13 || mod100 === 14 ) ) {
				type = 1;
			} else if ( mod10 === 0 || mod10 === 5 || mod10 === 6 || mod10 === 7 || mod10 === 8 || mod10 === 9 || mod100 === 11 || mod100 === 12 || mod100 === 13 || mod100 === 14 ) {
				type = 2;
			} else {
				type = 3;
			}

			if ( arguments.length > 1 ) {
				variant = ( isArray( arguments[ 1 ] ) ? arguments[ 1 ] : [].slice.call( arguments, 1 ) )[ type ];
			}

			return variant || this.variants[ type ] || "";
		};

		return Pluralize;
	}());

	extendBy( Pluralize, "Pluralize" );

	window.Russian = new Russian();

}());
