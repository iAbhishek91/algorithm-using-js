const Queue = require('./14-implement-queue-using-stack');


test('check length of newly created Queue', () => {
  const myQueue = new Queue(1);

  expect(myQueue.empty()).toBeFalsy();
});


test('Check empty queue', () => {
  const myQueue = new Queue(1);
  myQueue.pop();

  expect(myQueue.empty()).toBeTruthy();
});


test('pop', () => {
  const myQueue = new Queue(1);

  expect(myQueue.pop()).toBe(1);
});


test('push and pop', () => {
  const myQueue = new Queue(1);
  myQueue.push(3);
  expect(myQueue.pop()).toBe(1);
  expect(myQueue.pop()).toBe(3);
});



test('peek', () => {
  const myQueue = new Queue(1);

  expect(myQueue.peek()).toBe(1);
  myQueue.push(3)
  expect(myQueue.peek()).toBe(1);
  myQueue.pop();
  expect(myQueue.peek()).toBe(3);
});