<template>
  <div>
    <h1>Vue Master</h1>
    <hr>
    <h2>1、化繁为简的Watchers</h2>
    <el-input v-model="inputNumber" placeholder="请输入一个10以内的数字"></el-input>
    <span>该数字的平方为：{{squareResult}}</span>
    <hr>
    <h2>2、一劳永逸的组件注册</h2>
    <Button-Primary @click="routeChangeClick('childOne')"></Button-Primary>
    <Button-Danger @click="routeChangeClick('childTwo')"></Button-Danger>
    <hr>
    <h2>3、釜底抽薪的router key</h2>
    <router-view/>
    <hr>
    <h2>5、无招胜有招的高阶组件</h2>
    <High-Order-Component-One :value="highOrderComponentOneValue" label="labelOne" placeholder="please input valueOne" @input="handleInputOne('highOrderComponentOneInput')" @focus="handleFocus('highOrderComponentOneFocus')"></High-Order-Component-One>
    <High-Order-Component-Two :value="highOrderComponentTwoValue" label="labelTwo" placeholder="please input valueTwo" @input="handleInputTwo" @focus="handleFocus('highOrderComponentTwoFocus')"></High-Order-Component-Two>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      inputNumber: "",
      squareResult: "未知",
      squareMap: {},

      highOrderComponentOneValue: "",
      highOrderComponentTwoValue: "",
    }
  },
  created() {
    let _that = this;
    let i = 9;
    while(i >= 0) {
      _that.squareMap[i] = i*i;
      i--;
    }
    console.log("created");
  },
  watch: {
    inputNumber: {
      handler: "getSquareResultByInputNumber",
      immediate: true,
    },
  },
  methods: {
    getSquareResultByInputNumber() {
      let _that = this;
      // console.log(_that.inputNumber);
      if(_that.inputNumber || _that.inputNumber === 0) {
        _that.squareResult = _that.squareMap[_that.inputNumber];
      }else {
        _that.squareResult = "未知";
      }
    },
    routeChangeClick(routeName) {
      let _that = this;
      _that.$router.push({
        name: routeName,
      });
    },
    handleInputOne() {
      console.log("highOrderComponentOneInput");
    },
    handleInputTwo(value) {
      console.log(value);
    },
    handleFocus(string) {
      console.log(string);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
