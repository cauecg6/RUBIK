class MinHeap {
    constructor() {
        this.data = [];
    }

    isEmpty() {
        return this.data.length === 0;
    }

    push(item) {
        this.data.push(item);
        this._bubbleUp();
    }

    pop() {
        if (this.isEmpty()) return null;
        const top = this.data[0];
        const end = this.data.pop();
        if (!this.isEmpty()) {
            this.data[0] = end;
            this._sinkDown();
        }
        return top;
    }

    _bubbleUp() {
        let idx = this.data.length - 1;
        const item = this.data[idx];

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.data[parentIdx];

            if (item.f >= parent.f) break;

            this.data[parentIdx] = item;
            this.data[idx] = parent;
            idx = parentIdx;
        }
    }

    _sinkDown() {
        let idx = 0;
        const length = this.data.length;
        const item = this.data[0];

        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let swap = null;

            if (leftIdx < length) {
                const left = this.data[leftIdx];
                if (left.f < item.f) swap = leftIdx;
            }

            if (rightIdx < length) {
                const right = this.data[rightIdx];
                if (
                    (swap === null && right.f < item.f) ||
                    (swap !== null && right.f < this.data[swap].f)
                ) {
                    swap = rightIdx;
                }
            }

            if (swap === null) break;

            this.data[idx] = this.data[swap];
            this.data[swap] = item;
            idx = swap;
        }
    }
}

module.exports = MinHeap;
