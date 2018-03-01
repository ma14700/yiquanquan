<template>
  <div class="date-pickers">
    <input type="hidden" placeholder="选择日期" @focus="trueDateBox" :value="date" />
    <div class="date-box">
      <div class="day-select">
        <div>
          <button :class="{unUsed: month-1 < currentMonth && year<= currentYear }" @click="reduceMonth">上个月</button>
        </div>
        <div>
          <input readonly type="text" @click="selected" v-model="year" />年
          <input readonly type="text" @click="selected" v-model="month" />月
        </div>
        <div>
          <button @click="addMonth">下一月</button>
        </div>
      </div>
      <div class="day-screen">
        <div>
          <span v-for="week in week">{{ week }}</span>
        </div>
        <div @click="selectDay">
          <span :class="[isActive(day,calcMonth(month-1),calcDate(year,month-1,day)),isToday(day,calcMonth(month-1))]" v-for="day in previousMonth" class="previousMonth"> <i :data-month="calcMonth(month-1)" :data-date="calcDate(year,month-1,day)">{{ day }} </i></span>
          <span v-for="day in monthDay[month - 1]" v-bind:class="[isActive(day,month,calcDate(year,month,day)),isToday(day,month)]" class="currentMonth" :data-month="month"  :data-date="year+'/' + month + '/' + day"><i :data-month="month" :data-date="year+'/' + month + '/' + day">{{ day }} </i></span>
          <span :class="[isActive(day,calcMonth(month+1),calcDate(year,month+1,day))]"  v-for="day in nextMonth" class="nextMonth"><i :data-month="calcMonth(month+1)" >{{ day }} </i></span>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { Toast } from 'mint-ui';
  export default {
    data() {
      return {
        year: 0,
        month: 0,
        day: 0,
        today:0,
        currentMonth:0,
        currentYear:0,
        selectedDay:0,
        selectedMonth:0,
        previousMonth: [],
        nextMonth: [],
        week: ["日", "一", "二", "三", "四", "五", "六"],
        monthDay: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        openDays:30
      };
    },
    created(){
      this.trueDateBox();
    },
    computed: {
      date() {
        if (this.year == 0 || this.month == 0 || this.day == 0) {
          return "";
        }
        return this.year + "-" + this.month + "-" + this.day;
      }
    },
    watch: {
      year: function (val) {
        let reg = /^[1-9]\d*$/g;
        if (!reg.test(val)) {
          let date = new Date();
          this.year = date.getFullYear();
        }
        if (val < 0) {
          this.year = 1;
        }
        if (val > 10000) {
          this.year = 10000;
        }
        this.dayScreen();
      },
      month: function (val) {
        let reg = /^[1-9]\d*$/g;
        if (!reg.test(val)) {
          let date = new Date();
          this.month = date.getMonth() + 1;
        }
        if (val < 1) {
          this.month = 1;
        }
        if (val > 12) {
          this.month = 12;
        }
        this.dayScreen();
      }
    },
    methods: {
      calcMonth(month){
        if(month>12){
          return month - 12;
        }
        else if(month<1){
          return 12;
        }
        else{
          return month;
        }
      },
      calcDate(y,m,d){
        if(m>12){
          m = m - 12;
          y = y+1;
        }
        if(m < 1){
          m = 12;
          y = y -1;
        }
        return y +"/" + m + "/" + d;
      },
      // 突出显示当前日期
      isActive(index,month,date) {
        let _date = new Date(date);

        var days=Math.floor((_date.getTime()-new Date().getTime())/(24*3600*1000));
        if (days > this.openDays-1 || days < 0 || isNaN(days)) {
          return {
            unUsed: true
          };
        }
        if (index == this.day&& (month == this.month || month == this.selectedMonth)) {
          return {
            active: true
          };
        }
      },
      isToday(index,month){
        if (index == this.today && month == this.currentMonth ) {
          return {
            today: true
          };
        }
      },
      // 显示日期盒子并初始化
      trueDateBox() {
        if (this.date == "") {
          let date = new Date();
          date.setDate(date.getDate() + 1);
          this.year = date.getFullYear();
          if (this.isLeapYear(this.year)) {
            this.monthDay[1] = 29;
          } else {
            this.monthDay[1] = 28;
          }
          this.month = date.getMonth() + 1;
          this.day = date.getDate();
          this.selectedDay = this.day;
          this.selectedMonth = this.month;
          this.today = new Date().getDate();
          this.currentMonth = new Date().getMonth() + 1;
          this.currentYear = new Date().getFullYear();
        }
        this.dayScreen();
        this.dateBoxFlag = true;
        this.$emit('selectDate', this.date);
      },
      // 增减年份
      addYear() {
        return;
      },
      reduceYear() {
        return;
      },
      // 增减月份
      addMonth() {
        this.month++;
        if (this.month > 12) {
          this.month = 1;
          this.year++;
        }
      },
      reduceMonth() {
        if(this.month == this.currentMonth){
          return;
        }
        this.month--;
        if (this.month < 1) {
          this.month = 12;
          this.year--;
        }
      },
      // 获取input里的文字
      selected(e) {
        e.target.select();
      },
      // 选择日期
      selectDay(e) {
        let targetClass = e.target.className || e.target.parentNode.className;
        if(targetClass.indexOf("today")>-1){
          Toast({
                    message: '已约满',
                    position: 'middle',
                    duration: 1000
                });
              return;
        }
        if(targetClass.indexOf("unUsed")>-1){
          Toast({
                    message: '不可选择',
                    position: 'middle',
                    duration: 1000
                });
              return;
        }
        if (targetClass.indexOf("previousMonth")>-1) {
          if (this.month == 1) {
            this.month = 12;
            this.year--;
          } else {
            this.month = this.month - 1;
          }
          this.day = parseInt(e.target.innerText);
        } else if (targetClass.indexOf("nextMonth")>-1) {
          if (this.month == 12) {
            this.month = 1;
            this.year++;
          } else {
            this.month = this.month + 1;
          }
          this.day = parseInt(e.target.innerText);
        } else {
          let _day = parseInt(e.target.innerText);
          // if(!!e.target.dataset.month && e.target.dataset.month <= this.currentMonth){
          //   if(_day< this.today){
          //     Toast({
          //           message: '不可选择',
          //           position: 'middle',
          //           duration: 1000
          //       });
          //     return;
          //   }
          //   if(_day==this.today){
          //     Toast({
          //           message: '已约满',
          //           position: 'middle',
          //           duration: 1000
          //       });
          //       return;
          //   }
          // }
          this.day = parseInt(e.target.innerText);
        }
        this.selectedDay = this.day;
        this.selectedMonth = this.month;
        this.$emit('selectDate', this.date);
      },
      // 日期显示
      dayScreen() {
        // 上一个月
        let firstDate = new Date(this.year, this.month - 1, 1);
        let firstWeek = firstDate.getDay();
        let preMonthDay = null;
        if (this.month == 1) {
          preMonthDay = this.monthDay[11];
        } else {
          preMonthDay = this.monthDay[this.month - 2];
        }
        for (let i = 0; i < preMonthDay; i++) {
          this.previousMonth[i] = i + 1;
        }
        if (firstWeek == 0) {
          this.previousMonth = [];
          //this.previousMonth = this.previousMonth.slice(-7);
        } else {
          this.previousMonth = this.previousMonth.slice(-firstWeek);
        }
        // 下一个月
        let endDate = new Date(
          this.year,
          this.month - 1,
          this.monthDay[this.month - 1]
        );
        let endWeek = endDate.getDay();
        let nextMonthDay = null;
        if (this.month == 12) {
          nextMonthDay = this.monthDay[0];
        } else {
          nextMonthDay = this.monthDay[this.month];
        }
        for (let i = 0; i < nextMonthDay; i++) {
          this.nextMonth[i] = i + 1;
        }
        if (endWeek == 6) {
          this.nextMonth = this.nextMonth.slice(0, 7);
        } else {
          this.nextMonth = this.nextMonth.slice(0, 6 - endWeek);
        }
      },
      // 判断是否是闰年
      isLeapYear(year) {
        return year % 100 == 0 ?
          year % 400 == 0 ? true : false :
          year % 4 == 0 ? true : false;
      }
    }
  };

</script>
<style scoped>
  .date-pickers {
    width: 100%;
    position: relative;
    padding:0 0.45rem;
    box-sizing: border-box;
  }

  .date-pickers>input {
    width: 50%;
    height: 20px;
    padding: 5px;
  }

  .date-pickers>div {
    width: 100%;
    background: white;
  }

  .date-pickers>div div.day-select {
    display: flex;
    padding: 5px 0;
    height: 0.72rem;
    line-height: 0.72rem;
    color:#492b67;
    border-bottom: 1px solid #ccc;
    font-size:16px;
    font-weight: bolder;
  }
.date-pickers>div div.day-select input{
  font-size:inherit;
}
  .date-pickers>div div.day-select input,
  .date-pickers>div div.day-select button {
    border: none;
    background: white;
    text-align: center;
    color:#492b67;
    cursor: pointer;
  }
  .date-pickers>div div.day-select button.unUsed{
    color:#999;
  }

  .date-pickers>div div.day-select>div:nth-child(1) {
    width: 20%;
    text-align: left;
  }
  .date-pickers>div div.day-select>div:nth-child(3) {
    width: 20%;
    text-align: right;
  }

  .date-pickers>div div.day-select>div:nth-child(2) {
    width: 60%;
    display: flex;
    justify-content: center;
  }


  .date-pickers>div div.day-select>div:nth-child(2) input:nth-child(1) {
    width: 50px;
  }

  .date-pickers>div div.day-select>div:nth-child(2) input:nth-child(2) {
    width: 30px;
  }


  .date-pickers>div div.day-screen>div {
    width: 100%;
    display: flex;
    font-size: 14px;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .date-pickers>div div.day-screen>div span {
    width: 1.28rem;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
  }

  .date-pickers>div div.day-screen>div:nth-child(1) {
    color:#492b67;
  }

  .date-pickers>div div.day-screen>div:nth-child(2) span {
    cursor: pointer;
    color: black;
    position: relative;
    display: inline-block;
  }
  .date-pickers>div div.day-screen>div:nth-child(2) span i{
    position: absolute;
    z-index: 2;
    left: 0.14rem;
    top:0;
    width:1rem;
    height:1rem;
    line-height:1rem;
    text-align: center;
  }
  .date-pickers>div div.day-screen>div:nth-child(2) span.active{
    color:#fff;
  }
  .date-pickers>div div.day-screen>div:nth-child(2) span.active::before {
    content:'';
    background: #492b67;
    width:.9rem;
    height:.9rem;
    border-radius: 100%;
    position: absolute;
    top:0;
    left:0.19rem;
    z-index:0;
  }

  .date-pickers>div div.day-screen>div:nth-child(2) span.previousMonth,
  .date-pickers>div div.day-screen>div:nth-child(2) span.nextMonth {
    color: #999!important;
  }


  .date-pickers>div div.day-screen>div:nth-child(2) span.unUsed{
    color:#474747;
  }

  .date-pickers>div div.day-screen>div:nth-child(2) span.previousMonth::after,
  .date-pickers>div div.day-screen>div:nth-child(2) span.currentMonth::after,
  .date-pickers>div div.day-screen>div:nth-child(2) span.nextMonth::after{
    content:'';
    position: absolute;
    top:0;
    right: 0.24rem;
    width:5px;
    height:5px;
    background-color: #492b67;
    border-radius: 100%;
  }
 .date-pickers>div div.day-screen>div:nth-child(2) span.unUsed:after,
 .date-pickers>div div.day-screen>div:nth-child(2) span.active:after{
    display: none;
 }

 .date-pickers>div div.day-screen>div:nth-child(2) span.today:after{
     background-color: #a58abf;
     display: block;
 }

</style>
