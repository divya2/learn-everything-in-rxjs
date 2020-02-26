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



const textbox = document.getElementById('textbox');
const input$ = fromEvent(textbox, 'keyup')

const textbox1 = document.getElementById('textbox1');
const input1$ = fromEvent(textbox, 'keyup')

const textbox2 = document.getElementById('textbox2');
const input2$ = fromEvent(textbox, 'keyup')

input$.pipe(
    auditTime(1000),
    map((val: any) =>  
      val
  )).subscribe(console.log);
 /* 
input1$.pipe(
    debounceTime(1000),
    map((val: any) => 
      val.currentTarget.value
  )).subscribe(console.log);
  
input2$.pipe(
    throttleTime(1000),
    map((val: any) => 
      val.currentTarget.value
  )).subscribe(console.log);*/




