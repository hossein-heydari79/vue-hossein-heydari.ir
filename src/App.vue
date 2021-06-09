<template>
  <div>
    <keep-alive>
    <component :is="mode">
    <template v-if="mode=='light'">
    <div style="width:100%" slot="mode">
    <div class="light" @click="mode='dark'">
    <p style="padding:5px 0 ; margin:0 auto; font-family: Koodak; font-size: 18px ; width:100%; text-align: center;">حالت تاریک <i class="fa fa-moon-o" style="font-size:15px;color:rgb(240, 240, 240)"></i></p>
    </div>
    </div>

    <div slot="type">
    <h5
                style="
                  margin: 0;
                  font-size: 1.3em;
                  font-family: Koodak;
                  height: 25px;
                "
              >
                <span>طراح و توسعه دهنده وب</span>
              </h5>
    </div>

    </template>

    <template v-if="mode=='dark'">
    <div style="width:100%" slot="mode">
    <div class="dark" @click="mode='light'">
    <p style="padding:5px 0 ; margin:0 auto; font-family: Koodak; font-size: 18px;">حالت روشن <i class="fa fa-sun-o" style="font-size: 15px; color:rgb(240, 240, 240)"></i></p>
    </div>
    </div>

    <div slot="type">
    <h5
                style="
                  margin: 0;
                  font-size: 1.3em;
                  font-family: Koodak;
                  height: 25px;
                "
              >
                <span>طراح و توسعه دهنده وب</span>
              </h5>
    </div>

    </template>
    </component>
    </keep-alive>
  </div>
</template>

<script>
import Dark from "./dark";
import Light from "./light";
export default {
  name: "app",
  components: {
    dark: Dark,
    light: Light
  },
  data(){
    return{
      mode: 'dark'
    }
  }
};
</script>



<style scoped>

.light{
  justify-content:center;
  align-items: center;
  background-color: rgb(125, 102, 80);
  display:flex; color:rgb(240, 240, 240);
  cursor: pointer;
  text-align: center;
}

@media screen and (min-width: 768px){
.light{
  border-right:1px solid rgb(240, 240, 240);
  position: fixed;
  z-index: 10;
  width:70%;
}
.dark{
  border-right:1px solid black;
  position: fixed;
  z-index: 10;
  width:70%;
}
}

@media screen and (max-width: 768px){
.light{
  position: fixed;
  z-index: 10;
  top: 80px;
  width: 100%;
}
.dark{
  position: fixed;
  z-index: 10;
  top: 80px;
  width: 100%;
}
}

@media screen and (max-width: 576px){
.light{
  top: 55px;
}
.dark{
  top: 55px;
}
}

.dark{
  justify-content:center;
  align-items: center;
  background-color: #a47c64;
  display:flex;
  color:white;
  cursor: pointer;
}
</style>

