import APP from './component1'
import {banana, orange} from "./component2"

console.log("export default", APP)
console.log('export banana', banana)
console.log('export orange', orange)

import {banana as Ban, orange as Or} from "./component2";
console.log("export default", APP)
console.log('export banana', Ban)
console.log('export orange', Or)

import * as fruits from "./component2"
console.log("export default", APP)
console.log('export banana', fruits.banana)
console.log('export orange', fruits.orange)
