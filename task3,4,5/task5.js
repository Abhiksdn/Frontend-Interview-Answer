const originalObject = { key: 'value', nested: { key2: 'value2' } };
const Copy = { ...originalObject };
Copy.nested.key2 = 'new value';

console.log('Original Object:', originalObject);
console.log('Copy:', Copy);
