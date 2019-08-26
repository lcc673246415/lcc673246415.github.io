<!--  -->
<template>
  <div>
    <div class="title">{{number}}、{{subject[number]}}</div>
    <mt-radio style="font-size:40px" align="right" @change="changeChoice" v-model="Choice" :options="options[number]"></mt-radio>
     <div class="error" v-show="iserror">错误了！正确答案:{{values[number]}}</div>
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
      len:null,
      slots: null,
      popupVisible: false,
      correct:false
    };
  },
  created() {
   
    console.log(danxuanti)
    this.subject=danxuanti.map(item => item[1])
    this.values=danxuanti.map(item =>{
      if(item[2]==1){
        return "A"
      }
      if(item[2]==2){
        return "B"
      }
      if(item[2]==3){
        return "C"
      }
      if(item[2]==4){
        return "D"
      }
    })
    this.len=danxuanti.length
    //  subject: data[0].data.map(item => item[1]),
    //  values: data[0].data.map(item => item[2]),
    //  len: data[0].data.length,
    // console.log(this.number)
    this.options = danxuanti.map(item => {
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
        values: danxuanti.map((item,index) => index+1)
      }
    ];
    console.log(this.options);
     console.log(this.slots);
    
  },
  methods: {
    changeChoice() {
      console.log(this.values[this.number])
      console.log(this.Choice)
      if (this.values[this.number] == this.Choice) {
        this.iserror = false;
      } else {
        this.iserror = true;
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
      this.iserror = false
      this.number = number
      this.correct=false
    }
  }
};
</script>
<style   lang="scss">
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