const app = Vue.createApp({
    data() {
        return {
            inputError: false,
            newPoint: '',
            listArray: [
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
               
            ],
        };
    },

    methods: {
        addPoint() {
            let cleanedPoint= this.newPoint.trim();
            if (cleanedPoint.length > 4 != '') {
                this.listArray.unshift({ 
                    text: this.newPoint,
                    done: false,
                });
                this.newPoint = '';
                this.inputError = false;
            }
            else {
                this.inputError = true;
            }   
        },
        deleteItem(index) {
            this.listArray.splice(index, 1);
        },
        toggleDone(index) {
            this.listArray[index].done = !this.listArray[index].done
        },
    },   
        
});

app.mount('#todo');