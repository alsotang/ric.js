function ric(heavyWork, isDone, afterDone) {
  afterDone = afterDone || function () {};

  if (isDone()) {
    afterDone();
    return;
  }

  requestIdleCallback(function (deadline) {
    while (deadline.timeRemaining() > 0 && !isDone()) {
      heavyWork();
    }
    ric(heavyWork, isDone, afterDone);
  });


}
