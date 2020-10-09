const arr = [];

function keepAlive() {
    setInterval(function () {
        console.log("timer that keeps nodejs processing running");
    }, 1000 * 60 * 60);
}

function createConsumptionBlock() {
    const block = [];
    for (let j = 0; j < 1000000; j++) {
        block.push(Math.random())
    };
    return block;
}

function consume(size) {
    for (let i = 0; i < size; i++) {
        const block = createConsumptionBlock();
        arr.push(block);
    }
}

function release(size) {
    for (let i = 0; i < size; i++) {
        arr.pop();
    };
}

function getArrLength() {
    return arr.length;
}

module.exports = {
    keepAlive,
    consume,
    release,
    getArrLength,
}