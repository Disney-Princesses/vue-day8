<template>
    <div>
        {{ str }}<br>
        <input type="text" v-model="str" v-numder="str" v-focus>
    </div>
</template>

<script>
export default {
    data() {
        return {
            str: ''
        }
    },
    directives: {
        numder: {
            inserted(el, binding, vnode) {
                vnode.context[binding.expression] = el.value.replace(/\D+/g, '')
            },
            update(el, binding, vnode) {
                vnode.context[binding.expression] = el.value.replace(/\D+/g, '')
            }
        }
    }
}
</script>

<style>
</style>