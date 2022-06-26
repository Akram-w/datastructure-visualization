let queue = {
  size: 0,
  pushPosition: 0,
  popPosition: 0,
  queue: {},
};

function push(value) {
  queue = {
    ...queue,
    size: queue.size + 1,
    queue: {
      [queue.pushPosition]: value,
      ...queue.queue,
    },
    pushPosition: queue.pushPosition + 1,
  };
  console.log({queue})
}
function pop() {
  if (queue.size === 0) {
    console.log(queue);
    throw Error("Queue is Empty");
  }
  const popValue = queue.queue[queue.popPosition];
  delete queue.queue[queue.popPosition];
  queue = {
    ...queue,
    size: queue.size - 1,
    popPosition: queue.popPosition + 1,
  };
  return popValue;
}
function getQueue() {
  const tempQueue = [];
  for (const key in queue.queue) {
    if (Object.hasOwnProperty.call(queue.queue, key)) {
      const element = queue.queue[key];
      tempQueue.push(element);
    }
  }
  console.log({tempQueue})
  return tempQueue;
}
function size() {
  return queue.size;
}

export { push, pop, getQueue, size };
