To fix this, always check if `doc.exists` is true and if `doc.data()` is not null before accessing its properties:
```javascript
db.collection('users').doc('someId').get().then((doc) => {
  if (doc.exists && doc.data()) {
    console.log(doc.data().name);
  } else {
    console.log('No such document!');
  }
});
```
Alternatively, you can use optional chaining (?.) to safely access nested properties:
```javascript
db.collection('users').doc('someId').get().then((doc) => {
    console.log(doc.data()?.name);
});
```
This approach avoids errors if `doc.data()` is null, and will output `undefined` in that case.  Remember to handle the `undefined` case appropriately in your application logic.