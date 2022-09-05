const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Initial course goal',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const random = Math.random();
            if (random < .5) {
                return 'Learn Vue!'
            } else {
                return 'Learn React!'
            }
        }
    }
});

app.mount('#user-goal');