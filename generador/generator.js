//
function* gen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const g = gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

function* iterator(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterator(['Cronos', 'Yeferson', 'Cruz', 'Lina', 'Juan']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);