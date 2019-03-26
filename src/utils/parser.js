export default function getStoreValue(state, value) {
  const list = value.split('.');
  let storeValue = state;
  list.forEach((key) => {
    storeValue = storeValue[key];
  });
  return storeValue;
}
