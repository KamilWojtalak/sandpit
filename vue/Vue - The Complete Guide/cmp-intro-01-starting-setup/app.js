const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '123 123 123',
                    email: 'manuel@localhost.com',
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '121 121 121',
                    email: 'julie@localhost.com',
                }
            ]
        };
    },
    methods: {

    }
});

app.mount('#app');