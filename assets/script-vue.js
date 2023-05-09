const app = Vue.createApp({
    data() {
        return {
            newPoint: {
                text:'',
                done: false
            },
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
        addPoint() {
          if (this.newPoint.trim()) {
            this.ListArray.unshift({ text: this.newPoint, done: false })
            this.newPoint = ''
          }
        },
        remove(index) {
          this.ListArray.splice(index, 1)
        },
        toggleDone(index) {
          this.ListArray[index].done = !this.ListArray[index].done
        }
    },

});

app.mount('#todo');