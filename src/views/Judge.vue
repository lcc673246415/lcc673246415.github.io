<!--  -->
<template>
  <div>
    <div class="title">{{number}}、{{subject[number-1]}}</div>
    <mt-radio align="right" @change="changeChoice" v-model="Choice" :options="options[number-1]"></mt-radio>
    <div class="error" v-show="iserror">错误了！</div>
    <div class="success" v-show="correct">{{values[number-1]==0?'正确':'错误'}}</div>
    <div class="box">
      <mt-button type="primary" @click="upper">上一题</mt-button>
      <mt-button type="primary" @click="lower">下一题</mt-button>
    </div>
    <div class="choiceBtn" style="padding-bottom:10px">
      <mt-button type="primary" @click="correct=!correct">正确答案</mt-button>
    </div>
    <div class="choiceBtn">
      <mt-button type="primary" @click="popupVisible=true">选择题目</mt-button>
    </div>

    <mt-popup v-model="popupVisible" position="bottom">
      <div>
        <mt-picker :slots="slots" style="width:700px;" @change="onValuesChange">
        </mt-picker>
      </div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: null,
      // list: data[0].data,
      number: 1,
      subject: null,
      Choice: "",
      values: null,
      iserror: false,
      len: null,
      slots: null,
      popupVisible: false,
      correct:false
    };
  },
  created() {
    console.log(panduanti[0].data)
    this.subject=panduanti[0].data.map(item => item[1])
    this.values=panduanti[0].data.map(item => item[4])
    this.len=panduanti[0].data.length
    this.options = panduanti[0].data.map(item => {
      return [
        {
          label: "正确",
          value: "0"
        },
        {
          label: "错误",
          value: "1"
        }
      ];
    });
    this.slots = [
      {
        values: panduanti[0].data.map(item => item[0])
      }
    ];
    console.log(this.options);
  },
  methods: {
    changeChoice() {
      if (this.values[this.number - 1] != this.Choice) {
        this.iserror = true;
      } else {
        this.iserror = false;
      }
    },
    upper() {
      if (this.number > 1) {
        this.againInit(this.number-1);
      }
    },
    lower() {
      if (this.number < this.len) {
        this.againInit(this.number+1);
      }
    },
    onValuesChange(picker, values) {
      this.againInit(values[0]);
    },
    //重新选题
    againInit(number){
      this.Choice = ""
      this.correct=false
      this.iserror = false
      this.number = number
    }
  }
};
</script>
<style  scoped lang="scss">
.title {
  font-weight: 900;
  font-size: 28px;
}
.error {
  color: red;
  text-align: center;
  padding: 10px;
}
.success {
  color: yellowgreen;
  text-align: center;
  padding: 10px;
}
.box {
  display: flex;
  button {
    flex: 1;
    margin: 20px 30px;
  }
}
.choiceBtn {
  display: flex;
  button {
    flex: 1;
    justify-content: center;
    align-items: center;
  }
}
</style>