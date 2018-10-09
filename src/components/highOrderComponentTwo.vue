<template>
  <div>
    <el-form label-width="240px">
      <el-form-item :label="'highOrderComponentOne-' + label + ':'">
        <el-input v-model="valueInside" v-bind="$attrs" v-on="listeners"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
      name: "highOrderComponentTwo",
      props: {
        label: {
          type: String,
          default: "label",
        },
        value: {
          type: String,
          default: "",
        }
      },
      data() {
        let _that = this;
        return {
          valueInside: _that.value,
        }
      },
      created() {
        let _that = this;
        console.log("highOrderComponentTwo");
        console.log(_that.$attrs);
        console.log(_that.$listeners);
      },
      computed: {
        listeners() {
          let _that = this;
          return {
            ..._that.$listeners,
            input: value => _that.$emit("input", value)
          }
        },
      },
    }
</script>

<style scoped>

</style>
