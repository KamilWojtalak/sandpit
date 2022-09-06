<template lang="">
    <section>
        <h2>My friends</h2>
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>
<script>
export default {
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
                },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>