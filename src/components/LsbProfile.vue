<template>
    <div v-if="logged">
        <div class="row">
            <div class="col-md-3">
                <p class="h2" style="margin-top: 0">{{userData.displayName}}</p>
                <img v-bind:src="userData.photoURL" alt="imagem profile" class="img-thumbnail">
            </div>
            <div class="col-md-9">
                <pre>{{userData}}</pre>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            logged () {
                return this.$store.getters.isLogged
            }, 
            userData () {
                return this.$store.getters.getUser
            }
        }
    }
</script>
<style>
    
</style>