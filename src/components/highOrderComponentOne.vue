<template>
    <div>
      <el-form label-width="240px">
        <el-form-item :label="'highOrderComponentOne-' + label + ':'">
          <el-input v-bind="$attrs" v-on="$listeners"></el-input>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
      name: "highOrderComponentOne",
      props: {
        label: {
          type: String,
          default: "label",
        },
      },
      created() {
        let _that = this;
        console.log("highOrderComponentOne");
        console.log(_that.$attrs);
        console.log(_that.$listeners);
      },
    }
</script>

<style scoped>

</style>
