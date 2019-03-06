export const assert = (condition, msg) => {
  if (!condition) {
    throw new Error(msg)
  }
}

export const expect200 = (res) => {
  if (res && res.code && res.code === 200) return
  throw new Error(res.message);
}