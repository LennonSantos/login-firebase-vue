<template>
    <div v-if="logged">      
        <table class="table table-striped">
            <tr>
                <th>Data</th>
                <th>Valor</th>
                <th>Descrição</th>
            </tr>
            <!--<tr v-for="g in gastos">
                <td>{{g.date}}</td>
                <td>{{g.price}}</td>
                <td>{{g.desc}}</td>
            </tr>-->
            <tr v-for="g in gastos">
                <td>{{g}}</td>
                <td></td>
                <td></td>
            </tr>
            {{uid}}
        </table>
    </div><!-- root -->
</template>
<script>
    import {db} from './firebase'

    // var ref = db.ref('user/101120773451086132869/shop/').orderByChild('date').startAt('2017-08-06');

    export default {
        firebase () {
            return {
                gastos: this.lista,
            }
        },
        computed: {
            uid () {
                return this.$store.getters.getUser.uid
            },
            logged () {
                return this.$store.getters.isLogged
            },
            lista () {
                // let id = this.uid;
                console.log("uid: "+this.uid);
                return db.ref(`user/${this.uid}/shop`).orderByChild('date').startAt('2017-08-06');
            }
        }
    }
</script>
<style scoped>
</style>