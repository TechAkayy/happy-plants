import { createApp } from 'https://unpkg.com/petite-vue?module'

const store = {
    // exposed to all expressions
    count: 0,
    // getters
    get plusOne() {
        return this.count + 1
    },
    // methods
    inc() {
        this.count++
    },
}

createApp(store).mount('div#app2')