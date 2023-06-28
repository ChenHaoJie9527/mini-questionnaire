// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function checkResult(err: any, result: any) {
  if (!err && result) {
    // window.$message.success(result.message);
    return result;
  }
  return null;
}
