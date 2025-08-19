export default function taskBlock(trueOrFalse) {
// Fixing variable overwrite in the inner block
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
