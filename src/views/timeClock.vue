<template>
    <!-- 表盘 -->
    <div class='time-container' 
      :style="{ 
        width: container.Width + 'px', 
        height: container.Height + 'px',
        position: 'relative' //添加相对定位,很重要
      }">
  
      <!-- 中心点 -->
      <span class="time-dot"
        :style="{ 
          width: dot.Size + 'px', 
          height: dot.Size + 'px', 
          top: '50%', 
          left: '50%',
          transform: 'translate(-50%, -50%)' 
        }">
      </span>
    
    <!-- 刻度线部分 -->
      <span class="anchor" v-for="min in 60" :key="min">
        <!-- 刻度线 -->
            <span class="anchor_line" 
                v-if="min%5!==0"
                :key="min"
                :style="{ 
                transform: 'rotate(' + min*6 + 'deg) translate(' + container.Width*0.42 + 'px)' 
                }"></span>

                <!-- 小时 -->
            <span class="anchor-hour" 
                v-if="min%5===0" 
                :style="{ 
                    transform: 'translate(-50%, -50%) translate(' + getHourTranslateX(min) + 'px, ' + getHourTranslateY(min) + 'px)'
                }">
                {{ min }}
            </span>

            <!-- 分钟 -->
            <span class="anchor-min"
                v-if="min%5===0" 
                :style="{ 
                    transform: 'translate(-50%, -50%) translate(' + getMinuteTranslateX(min) + 'px, ' + getMinuteTranslateY(min) + 'px)'
                }">
                {{ min/5 }}
            </span>
            
        </span>


        <!-- 指针部分 -->

        <!-- 秒针 -->
        <span class="sec-pin" 
                :style="{
                    width: mydate.sec_length + 'px',
                    transform: 'translate(-50%, -50%) rotate(' + mydate.sec + 'deg) translate(' + mydate.sec_length/2 + 'px)'
                }"></span>

        <!-- 分针 -->
        <span class="min-pin" 
                :style="{
                    width: mydate.min_length + 'px',  // 补充分针长度
                    transform: 'translate(-50%, -50%) rotate(' + mydate.min + 'deg) translate(' + mydate.min_length/2 + 'px)'
                }"></span>

        <!-- 时针 -->
        <span class="hour-pin" 
                :style="{
                    width: mydate.hour_length + 'px',  // 补充时针长度
                    transform: 'translate(-50%, -50%) rotate(' + mydate.hour + 'deg) translate(' + mydate.hour_length/2 + 'px)'
                }"></span>
  

        <!-- 年月日 -->
        <span class="current-day">{{ current_day }}</span>
    </div>
</template>

<script>

export default (await import('vue')).defineComponent({
    components: {},
    data() {
        return {
            container:{
                Width: 550,
                Height: 550,
            },
            dot:{
                Size: 10,
            },
            mydate:{
                sec:0, sec_length:225,
                min:0, min_length:180,  // 分针长度
                hour:0, hour_length:120,  // 时针长度
                current_day:""
            }
        };
    },
    computed: {
        // 时分时刻的计算函数
        getHourTranslateX() {
            return (min) => Math.cos(min*6*Math.PI/180-Math.PI/2)*(this.container.Width*0.435);
        },
        getHourTranslateY() {
            return (min) => Math.sin(min*6*Math.PI/180-Math.PI/2)*(this.container.Width*0.435);
        },
        getMinuteTranslateX() {
            return (min) => Math.cos(min*6*Math.PI/180-Math.PI/2)*(this.container.Width*0.3);
        },
        getMinuteTranslateY() {
            return (min) => Math.sin(min*6*Math.PI/180-Math.PI/2)*(this.container.Width*0.3);
        },
    },
    watch: {},
    methods: {
        // 将要在mounted中使用的函数
        current_date() {
            //获取时间
            let date = new Date();
            let t = {};
            t.h = date.getHours();
            t.m = date.getMinutes();
            t.s = date.getSeconds();
            t.ms = date.getMilliseconds();

            // 计算角度
            this.mydate.hour = (t.h + t.m/60 + t.s/3600 + t.ms/3600000) * 30 - 90;
            this.mydate.min = (t.m + t.s/60 + t.ms/60000) * 6 - 90;
            this.mydate.sec = (t.s + t.ms/1000) * 6 - 90;

            //计算年月日
            t.y=date.getFullYear()
            t.mn=date.getMonth()+1//注意加一
            t.d=date.getDate()
            this.current_day= t.y + '年' + t.mn + '月' + t.d + '日'
        }
    },
    created() {

    },
    mounted() {
        this.timer = setInterval(this.current_date, 35)
    },
})
</script>

<style lang='scss' scoped>
.time-container {
    margin: 0 auto;
    margin-top: 20px;
}

.time-dot {
    border-radius: 50%;
    background-color: rgb(0, 255, 174);
    position: absolute;
    outline: 3.25px solid rgb(206, 186, 75);
}

.anchor_line{
    width: 18px;
    height: 2px;
    transform-origin: 0px 1px;
    background: #72777e;
}

.anchor-hour, .anchor_line, .anchor-min, .sec-pin, .min-pin, .hour-pin{
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 999;
}

.anchor-hour{
    text-align: center;
    font-size: 20px;
    position: absolute;
    color: #72777e;
    width: 30px;
    height: 30px;
    line-height: 30px;

}

.anchor-min{

    text-align: center;
    font-weight: bold;
    font-size: 54px;
    position: absolute;
    color: #72777e;
    width: 100px;
    height: 30px;
    line-height: 30px;

}

.sec-pin{
    background-color: hsl(182, 100%, 65%);
    height: 2px;
    box-shadow: 0 0 3rem 9px hsl(171, 95%, 62%);
}

.min-pin{
    background-color: hsl(138, 86%, 78%);
    height: 2px;
    box-shadow: 0 0 3rem 9px hsl(171, 95%, 62%);
}

.hour-pin{
    background-color: hsl(74, 100%, 71%);
    height: 2px;
    box-shadow: 0 0 3rem 9px hsl(171, 95%, 62%);
}

.current-day{
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    color: rgb(164, 255, 173);
    font-size: 22px;
}
</style>
