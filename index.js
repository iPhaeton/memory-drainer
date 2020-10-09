const arr = [];

function keepAlive() {
    setInterval(function () {
        console.log("timer that keeps nodejs processing running");
    }, 1000 * 60 * 60);
}

function createConsumptionBlock() {
    const block = [];
    for (let j = 0; j < 1000000; j++) {
        block.push(Math.random());
    };
    return block;
}

function consume(size) {
    for (let i = 0; i < size; i++) {
        setTimeout(() => {
            const block = createConsumptionBlock();
            arr.push(block);
        }, 0);
    }
}

keepAlive();
consume(1000);