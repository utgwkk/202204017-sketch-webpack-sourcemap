// Code from https://github.com/susisu/promise-utils#usage
import { triplet } from "@susisu/promise-utils";

const [promise, resolve, reject] = triplet();

resolve(42);

promise.then(res => {
  console.log(res); // -> 42
});
