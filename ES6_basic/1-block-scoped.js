export default function taskBlock(trueOrFalse) {
// Fixing variable overwrite in the inner block
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
