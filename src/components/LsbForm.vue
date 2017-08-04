<template>
    <div v-if="logged">      
        <form>
            <div class="form-group col-md-6">
                <label for="txtDate">Data</label>
                <input id="txtDate" type="date" class="form-control" v-model="date">
            </div>
            <div class="form-group col-md-6">
                <label for="txtPrice">Valor</label>
                <input id="txtPrice" type="text" class="form-control" placeholder="5.95" v-model="price">
            </div>
            <div class="form-group col-md-12">
                <label for="txtDesc">Descrição</label>
                <textarea id="txtDesc" rows="5" class="form-control" placeholder="Juros" v-model="desc"></textarea>
            </div>
            <div class="form-group col-md-12">
                <button @click.prevent="addItem" class="btn btn-default">add item</button>
            </div>
        </form>
    </div><!-- root -->
</template>
<script>
    import {db} from './firebase'

    export default {
        data () {
            return {
                date: '',
                price: '',
                desc: '',
            }
        },
        methods: {
            addItem: function () {
                db.ref(`user/${this.uid}/shop`).push({
                    date: this.date,
                    price: parseFloat(this.price),
                    desc: this.desc,
                });
            }
        },
        computed: {
            uid () {
                return this.$store.getters.getUser.uid;
            },
            logged () {
                return this.$store.getters.isLogged
            }
        }
    }
</script>
<style scoped>
    form{
        background-color: #ecf0f1;
        border: 1px solid #bdc3c7;
        overflow: hidden;
    }
</style>