class Items {

    constructor(length) {
        this.list = []
        for (let pos = 0; pos < length; pos++) {
            var val = pos + 1
            this.list.push(new Item(val, pos))
        }
        this.shuffle()
    }

    shuffle() {
        var n = this.list.length
        while (n > 0) {
            var m = Math.floor(Math.random() * n--);
            this.swap(n, m, false)
        }
    }

    swap(pos1, pos2, visual = true) {
        if (visual) this.swapVisual(pos1, pos2)
        var tmp = this.list[pos1]
        this.list[pos1] = this.list[pos2]
        this.list[pos2] = tmp
        this.list[pos1].pos = pos1
        this.list[pos2].pos = pos2
        if (visual) this.swapVisual(pos1, pos2)
    }

    swapVisual(pos1, pos2) {
        this.list[pos1].highlight = this.list[pos2].highlight = 'mediumaquamarine'
        this.pushToNext()
        this.list[pos1].highlight = this.list[pos2].highlight = false
    }

    endItem(pos) {
        this.list[pos].highlight = 'grey'
        this.pushToNext()
    }

    endAll() {
        for (var item of this.list) item.highlight = 'grey'
        this.pushToNext()
    }

    pushToNext() {
        Visual.next(this.list.map(a => ({ ...a })))
    }
}

class Item {
    constructor(val, pos) {
        this.val = val
        this.pos = pos
        this.highlight = false
    }
}