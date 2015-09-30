## intro

**[requestIdleCallback](https://developers.google.com/web/updates/2015/08/27/using-requestidlecallback)** experiment

Execute heavy computing work, but do not block the browser.


## example

without `ric`

```js
var max = 1000000000;
var count = 0;
while (count < max) {
  count++;
}

document.querySelector('.result').innerHTML = count;
```

with `ric`

```js
var max = 1000000000;
var count = 0;

ric(function heavyWork() {
  count++
  if (count % 1000000 === 0) {
    console.log('count is ' + count);
  }
}, function isDone() {
  return count >= max;
}, function afterDone() {
  document.querySelector('.result').innerHTML = count;
});
```

