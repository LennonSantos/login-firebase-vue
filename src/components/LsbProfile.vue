<template>
    <div v-if="logged">
        <p class="h2" style="margin-top: 0">{{userData.displayName}}</p>
        <img v-bind:src="userData.photoURL" alt="imagem profile" class="img-thumbnail img-circle">            
    </div>
</template>
<script>
    import {db} from './firebase'
    
    var ref = db.ref('game/');

    export default {
        firebase () {
            return {
                db: ref
            }
        },
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
<style scoped>
    div{
        background-color: #34495e;
        color: #2ecc71;
        box-shadow: 1px 1px 20px #333;
        text-align: center;
        padding: 10px;
    }
</style>