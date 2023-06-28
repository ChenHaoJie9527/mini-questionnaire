/* eslint-disable @typescript-eslint/no-explicit-any */
export async function checkResult(
  err: any,
  result: any
): Promise<Record<string, any> | null> {
  if (!err && result) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(result);
      }, 1000);
    });
  }
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 1000);
  });
}
