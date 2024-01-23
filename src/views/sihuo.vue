<template>
    <div>
        <p>
        所长，你给我下了什么定时器啊，能让我在每天setInterval(🥰😫😭, 1000)，每秒种都想你
        </p>
        <div class='sihuo'></div>
    </div>

</template>

<script>

export default (await import('vue')).defineComponent({
components: {},
data() {
return {

};
},
computed: {},
watch: {},
methods: {

},
created() {

},
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
})
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
p{
    text-align: center;
    color: rgb(86, 236, 128);
    font-size: 30px;
    margin-bottom: 20px;
}
.sihuo {
    background-image: url("../assets/ying.webp");
    background-repeat: no-repeat;
    text-align: center;
    background-size: cover;
    background-position: center;
    height: 100vh;
}
</style>