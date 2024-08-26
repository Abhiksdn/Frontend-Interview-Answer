const handler = {
    get(target, prop, receiver) {
        if (prop in target) {
            console.log(`Accessing property '${prop}': ${target[prop]}`);
            return Reflect.get(target, prop, receiver);
        } else {
            console.log(`Property '${prop}' does not exist.`);
            return undefined;
        }
    },
    set(target, prop, value, receiver) {
        if (prop === 'age' && typeof value !== 'number') {
            console.error('Property "age" must be a number.');
            return false;
        }
        if (prop === 'name' && typeof value !== 'string') {
            console.error('Property "name" must be a string.');
            return false;
        }
        console.log(`Setting property '${prop}' to '${value}'`);
        return Reflect.set(target, prop, value, receiver);
    },
    deleteProperty(target, prop) {
        if (prop in target) {
            console.log(`Deleting property '${prop}'`);
            return Reflect.deleteProperty(target, prop);
        } else {
            console.log(`Property '${prop}' does not exist.`);
            return false;
        }
    }
};




const person = new Proxy({}, handler);
person.name = 'Abhi';
person.age = 20;
person.age = 'twenty';
console.log(person.name);
delete person.age;        
console.log(person.age);