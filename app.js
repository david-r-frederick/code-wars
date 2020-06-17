const uid = Symbol('uid');
console.log(uid);

const user = {
    [uid]: 'p1',
    name: 'David',
    age: 29,
    [Symbol.toStringTag]: 'User'
};

user[uid] = 'new thing';
console.log(user);
