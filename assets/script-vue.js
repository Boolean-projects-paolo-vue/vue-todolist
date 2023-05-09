const app = Vue.createApp({
    data() {
        return {
            newPoint: {text:''},
            ListArray: [
                {
                    text:'fare la spesa',
                    done: false
                },
                {
                    text:'pulire casa',
                    done: false
                },
                {
                    text:'riparare la macchina',
                    done:false
                }
               
            ]  
        }
    },
    methods: {
            addTodo() {
                if (this.newPoint.trim()) {
                this.ListArray.unshift({ text: this.newPoint, done: false })
                this.newTodo = ''
                }

            deleteItem(index) {
                this.ListArray[index].done = !this.ListArray[index].done;
            }
        },
    },
});

app.mount('#todo');