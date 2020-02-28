import { of, fromEvent, Observable, interval  } from 'rxjs'; 
import { map, throttleTime, debounceTime, scan, pluck, concatMap,auditTime } from 'rxjs/operators';

//observable
/* of- emitting values in sequence and then emitting a complete notification. eg-string, array of values*/
const ofString = of('World').pipe(
  map(x => `Hello ${x}!`)
);
ofString.subscribe(x => console.log(x));

const ofArray = of([1,2,3,4], {val: 'Hello'}, function val() {
  return val;
});
ofArray.subscribe(x => console.log(x));


