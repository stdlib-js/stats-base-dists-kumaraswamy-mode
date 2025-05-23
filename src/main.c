/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#include "stdlib/stats/base/dists/kumaraswamy/mode.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/pow.h"

/**
* Returns the mode of a Kumaraswamy's double bounded distribution.
*
* @param a  first shape parameter
* @param b  second shape parameter
* @return   mode
*
* @example
* double y = stdlib_base_dists_kumaraswamy_mode( 1.5, 1.5 );
* // returns ~0.543
*/
double stdlib_base_dists_kumaraswamy_mode( const double a, const double b ) {
	if (
		stdlib_base_is_nan( a ) ||
		stdlib_base_is_nan( b ) ||
		a < 1.0 ||
		b < 1.0 ||
		( a == 1.0 && b == 1.0 )
	) {
		return 0.0/0.0; // NaN
	}
	return stdlib_base_pow( ( a-1.0 ) / ( (a*b) - 1.0 ), 1.0/a );
}
