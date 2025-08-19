export default function taskBlock(trueOrFalse) {
// Fixing variable overwrite in the inner block
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
    void task;
    void task2;
  }

  return [task, task2];
}
