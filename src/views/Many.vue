<!--  -->
<template>
  <div>
    <div class="title">{{number}}、{{subject[number]}}</div>
    <mt-checklist align="right" @change="changeChoice" v-model="Choice" :options="options[number]"></mt-checklist>
    <div class="error" v-show="iserror">没有选择正确</div>
    <div class="success" v-show="correct">{{values[number]}}</div>
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
        <mt-picker :slots="slots" style="width:700px;" @change="onValuesChange"></mt-picker>
      </div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: null,
      number: 1,
      subject: null,
      Choice: [],
      values: null,
      iserror: true,
      len: null,
      slots: null,
      popupVisible: false,
      correct:false
    };
  },
  created() {
    console.log(duoxuanti)
    this.subject=duoxuanti.map(item => item[1])
    this.values=duoxuanti.map(item => {
      return item[2].toString().replace("1","A").replace("2","B").replace("3","C").replace("4","D");
    })
    this.len=duoxuanti.length
    this.options = duoxuanti.map(item => {
      return [
        {
          label: "A、" + item[3],
          value: "A"
        },
        {
          label: "B、" + item[4],
          value: "B"
        },
        {
          label: "C、" + item[5],
          value: "C"
        },
        {
          label: "D、" + item[6],
          value: "D"
        }
      ];
    });
    this.slots = [
      {
        values: duoxuanti.map((item,index) => index+1)
      }
    ];
    console.log(this.options);
  },
  methods: {
    changeChoice() {
      console.log(this.Choice)
      console.log(this.values[this.number])
      if (this.values[this.number] != this.Choice.sort().join("")) {
        this.iserror = true;
      } else {
        this.iserror = false;
      }
    },
    upper() {
      if (this.number > 1) {
        this.againInit(this.number - 1);
      }
    },
    lower() {
      if (this.number < this.len) {
        this.againInit(this.number + 1);
      }
    },
    onValuesChange(picker, values) {
      this.againInit(values[0]);
    },
    //重新选题
    againInit(number) {
      this.Choice = [];
      this.correct=false
      this.iserror = false;
      this.number = number;
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
.success {
  color: yellowgreen;
  text-align: center;
  padding: 10px;
}
</style>