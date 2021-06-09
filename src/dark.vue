<template>
  <div>
    <div id="myModal2" class="modal">
      <span class="close" @click="closeB"><i class="fa fa-close"></i></span>
      <img
        class="modal-content"
        id="img02"
        :src="require('./assets/images/front.jpg')"
      />
    </div>

    <div id="myModal3" class="modal">
      <span class="close" @click="closeC"><i class="fa fa-close"></i></span>
      <img
        class="modal-content"
        id="img03"
        :src="require('./assets/images/min.jpg')"
      />
    </div>

    <div class="container-fluid" style="background-color: black">
      <div class="row menu">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <svg
            class="ham hamRotate ham1 navbar-toggler"
            viewBox="0 0 100 100"
            width="55"
            height="40"
            onclick="this.classList.toggle('active')"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <path
              class="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path class="line middle" d="m 30,50 h 40" />
            <path
              class="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>

          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#info" id="house">خانه</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Introduction">معرفی</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">مهارت ها </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#works">نمونه کار</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#certificates">مدارک</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">تماس با من</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="row info" id="info">
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 profile">
          <div class="fixed">
            <div class="div-my-img">
              <img
                src="./assets/images/i.jpg"
                alt="Hossein-Heydari"
                class="my-img"
              />
            </div>

            <div class="esm">
              <h2>حسین حیدری</h2>
            </div>

            <div class="onvan">
              <slot name="type"></slot>

              <br />
              <i
                class="fa fa-envelope"
                style="
                  float: right;
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  font-weight: bold;
                "
                ><a
                  style="color: #212529"
                  href="mailto:admin@hossein-heydari.ir"
                  class="icon"
                  >admin@hossein-heydari.ir</a
                ></i
              ><br />

              <i
                class="fa fa-phone"
                aria-hidden="true"
                style="
                  float: right;
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  font-weight: bold;
                "
                ><a class="icon" href="tel:+989012688990" style="color: #212529"
                  >98-9012688990+</a
                ></i
              ><br />

              <i
                class="fa fa-map-marker"
                style="
                  float: right;
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                "
                ><p class="icon" style="font-family: Koodak">
                  ایران ، تهران
                </p></i
              >

              <div
                class="text-center"
                style="width: 100%; margin: 5px; padding: 0"
              >
                <a class="link" href="tg://resolve?domain=hossein_heydari79"
                  ><i class="fa fa-telegram" aria-hidden="true"></i
                ></a>
                <a class="link" href="https://instagram.com/hossein_heydari79_"
                  ><i class="fa fa-instagram" aria-hidden="true"></i
                ></a>
                <a
                  class="link"
                  href="https://www.linkedin.com/in/hossein-heydari-7085931b8"
                  ><i class="fa fa-linkedin-square" aria-hidden="true"></i
                ></a>
                <a
                  class="link"
                  href="https://api.whatsapp.com/send?phone=989012688990"
                  ><i class="fa fa-whatsapp" aria-hidden="true"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-xl-8 col-lg-8 col-md-8 col-sm-12 information"
          id="Introduction"
          style="padding: 0"
        >
          <slot name="mode" style="width: 100%"></slot>

          <div
            class="div-titr wow animate__animated animate__fadeInUp"
            style="margin-top: 50px"
          >
            <b class="titr"
              ><i
                class="fa fa-check-circle"
                style="font-size: 15px; margin-left: 8px"
              ></i
              >معرفی</b
            >
          </div>

          <div class="div-mtn-moarefi">
            <p class="mtn-moarefi wow animate__animated animate__fadeIn">
              حسین حیدری هستم دانشجو کارشناسی رشته علوم کامپیوتر از دانشگاه
              سراسری قم<br /><br />
              متولد 1379 ساکن غرب استان تهران هستم ، چند سالی هست که تو حوزه ی
              برنامه نویسی فعالیت میکنم از جمله در عرصه ی بازی سازی ، توسعه ی
              اپلیکیشن های اندروید ، طراحی و توسعه ی وب .
            </p>
          </div>

          <div class="education">
            <div
              class="div-education wow animate__animated animate__fadeInRight"
            >
              <a href="http://www.helli-malard.ir/"
                ><img
                  src="./assets/images/sampad.png"
                  class="logo"
                  alt="Sampad"
              /></a>
              <p class="mtn-education" style="text-align: center">
                <i
                  class="fa fa-bookmark"
                  style="color: #a47c64; margin: 0 10px"
                ></i>
                1391 - 1397مدرسه علامه حلی ملارد (سمپاد)
              </p>
            </div>

            <div
              class="div-education wow animate__animated animate__fadeInLeft"
            >
              <a href="https://qom.ac.ir/"
                ><img
                  src="./assets/images/qom.png"
                  class="logo"
                  alt="Qom_University"
              /></a>
              <p class="mtn-education" id="skills" style="text-align: center">
                <i
                  class="fa fa-bookmark"
                  style="color: #a47c64; margin: 0 10px"
                ></i>
                1397 - 1401 کارشناسی رشته علوم کامپیوتر
              </p>
            </div>
          </div>

          <div
            class="div-titr2 wow animate__animated animate__fadeInUp"
            style="margin-top: 40px"
          >
            <b class="titr"
              ><i
                class="fa fa-check-circle"
                style="font-size: 15px; margin-left: 8px"
              ></i
              >مهارت ها</b
            >
          </div>

          <div
            class="skill wow animate__animated animate__zoomIn"
            data-wow-duration="0.7s"
          >
            <p class="onvan-skill">HTML</p>
            <div class="skill1">
              <div class="skill2" style="width: 95%; margin: 0 1px">95%</div>
            </div>
          </div>

          <div
            class="skill wow animate__animated animate__zoomIn"
            data-wow-duration="0.7s"
          >
            <p class="onvan-skill">CSS</p>
            <div class="skill1">
              <div class="skill2" style="width: 95%; margin: 0 1px">95%</div>
            </div>
          </div>

          <div
            class="skill wow animate__animated animate__zoomIn"
            data-wow-duration="0.7s"
          >
            <p class="onvan-skill" style="font-size: 15px">Bootstrap</p>
            <div class="skill1">
              <div class="skill2" style="width: 95%; margin: 0 1px">95%</div>
            </div>
          </div>

          <div
            class="skill wow animate__animated animate__zoomIn"
            data-wow-duration="0.7s"
          >
            <p class="onvan-skill">Sass</p>
            <div class="skill1">
              <div class="skill2" style="width: 90%; margin: 0 1px">90%</div>
            </div>
          </div>

          <div
            class="skill wow animate__animated animate__zoomIn"
            data-wow-duration="0.7s"
          >
            <p class="onvan-skill">JS</p>
            <div class="skill1">
              <div class="skill2" style="width: 80%; margin: 0 1px">80%</div>
            </div>
          </div>

          <div
            class="skill wow animate__animated animate__zoomIn"
            data-wow-duration="0.7s"
          >
            <p class="onvan-skill">Vue js</p>
            <div class="skill1">
              <div class="skill2" style="width: 95%; margin: 0 1px">95%</div>
            </div>
          </div>

          <div
            class="skill wow animate__animated animate__zoomIn"
            data-wow-duration="0.7s"
          >
            <p class="onvan-skill">Vuex</p>
            <div class="skill1">
              <div class="skill2" style="width: 90%; margin: 0 1px">90%</div>
            </div>
          </div>

          <div
            class="skill wow animate__animated animate__zoomIn"
            data-wow-duration="0.7s"
          >
            <p class="onvan-skill">Vuetify</p>
            <div class="skill1">
              <div class="skill2" style="width: 80%; margin: 0 1px">80%</div>
            </div>
          </div>

          <div
            class="skill wow animate__animated animate__zoomIn"
            data-wow-duration="0.7s"
          >
            <p class="onvan-skill">jQuery</p>
            <div class="skill1">
              <div class="skill2" style="width: 95%; margin: 0 1px">95%</div>
            </div>
          </div>

          <div
            class="skill wow animate__animated animate__zoomIn"
            data-wow-duration="0.7s"
          >
            <p class="onvan-skill">Ajax</p>
            <div class="skill1">
              <div class="skill2" style="width: 90%; margin: 0 1px">90%</div>
            </div>
          </div>

          <div
            class="skill wow animate__animated animate__zoomIn"
            data-wow-duration="0.7s"
          >
            <p class="onvan-skill">SEO</p>
            <div class="skill1">
              <div class="skill2" style="width: 70%; margin: 0 1px">70%</div>
            </div>
          </div>

          <div
            class="skill wow animate__animated animate__zoomIn"
            data-wow-duration="0.7s"
          >
            <p class="onvan-skill">Wp</p>
            <div class="skill1">
              <div class="skill2" style="width: 95%; margin: 0 1px">95%</div>
            </div>
          </div>

          <div
            class="skill wow animate__animated animate__zoomIn"
            data-wow-duration="0.7s"
          >
            <p class="onvan-skill">Git</p>
            <div class="skill1">
              <div class="skill2" style="width: 95%; margin: 0 1px">95%</div>
            </div>
          </div>

          <div
            class="container"
            style="width: 90%; margin-top: 50px; padding: 0; margin-bottom: 0px"
          >
            <div class="row">
              <div class="col-6 flexbox wow animate__animated animate__zoomIn">
                <div class="progress-circle progressing p-100">
                  <div class="progress-circle-border">
                    <div class="left-half-circle"></div>
                    <div class="right-half-circle"></div>
                  </div>
                  <div class="progress-circle-content">100%</div>
                </div>

                <p style="margin-top: 0; font-family: Koodak; font-size: 17px">
                  ارتباطات
                </p>
              </div>

              <div class="col-6 flexbox wow animate__animated animate__zoomIn">
                <div class="progress-circle progressing p-95">
                  <div class="progress-circle-border">
                    <div class="left-half-circle"></div>
                    <div class="right-half-circle"></div>
                  </div>
                  <div class="progress-circle-content">95%</div>
                </div>

                <p style="margin-top: 0; font-family: Koodak; font-size: 17px">
                  کارگروهی
                </p>
              </div>

              <div class="col-6 flexbox wow animate__animated animate__zoomIn">
                <div class="progress-circle progressing p-80">
                  <div class="progress-circle-border">
                    <div class="left-half-circle"></div>
                    <div class="right-half-circle"></div>
                  </div>
                  <div class="progress-circle-content">80%</div>
                </div>

                <p style="margin-top: 0; font-family: Koodak; font-size: 17px">
                  مدیریت پروژه
                </p>
              </div>

              <div class="col-6 flexbox wow animate__animated animate__zoomIn">
                <div class="progress-circle progressing p-70">
                  <div class="progress-circle-border">
                    <div class="left-half-circle"></div>
                    <div class="right-half-circle"></div>
                  </div>
                  <div class="progress-circle-content">70%</div>
                </div>

                <p style="margin-top: 0; font-family: Koodak; font-size: 17px">
                  خلاقیت
                </p>
              </div>
            </div>
          </div>

          <br id="works" />

          <div
            class="div-titr2 wow animate__animated animate__fadeInUp"
            data-wow-duration="0.7s"
            style="margin-top: 60px"
          >
            <b class="titr"
              ><i
                class="fa fa-check-circle"
                style="font-size: 15px; margin-left: 8px"
              ></i
              >نمونه کار</b
            >
          </div>

          <div
            class="div-education wow animate__animated animate__slideInUp"
            style="width: 90%"
          >
            <img
              src="./assets/images/fanjou.png"
              class="logo"
              alt="Fanjou.ir"
              style="max-width: 260px; height: 180px"
            />
            <p class="mtn-education" style="font-size: 21px">
              <i
                class="fa fa-bookmark"
                style="color: #a47c64; margin: 0 8px"
              ></i
              ><a style="color: #90a0a6">تیم فنجو </a>
            </p>
            <div class="div-mtn-moarefi" style="margin-top: 20px">
              <p
                class="mtn-moarefi"
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  text-align: center;
                  font-size: 18px;
                "
              >
                فنجو ، متشکل از 6 نفر یک پلتفرم است که در عرصه ی مهارت آموزی
                فعالیت میکند.
              </p>
            </div>

            <div
              class="div-mtn-moarefi"
              id="certificates"
              style="margin-top: 20px"
            >
              <p
                class="mtn-moarefi"
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                "
              >
                برای مشاهده
                <a
                  href="https://fanjou.ir/blog"
                  style="padding: 0 10px; color: #a47c64"
                  >کلیک </a
                >کنید
              </p>
            </div>
          </div>

          <div
            class="div-titr2 wow animate__animated animate__fadeInUp"
            data-wow-duration="0.7s"
            style="margin-top: 20px"
          >
            <b class="titr"
              ><i
                class="fa fa-check-circle"
                style="font-size: 15px; margin-left: 8px"
              ></i
              >مدارک</b
            >
          </div>

          <div
            class="div-education wow animate__animated animate__slideInUp"
            style="width: 90%"
          >
            <img
              src="./assets/images/front.jpg"
              class="logo"
              alt="Front-End Developer"
              style="max-width: 260px; height: 180px"
            />

            <p
              class="mtn-education"
              style="font-size: 18px; text-align: center"
            >
              <i
                class="fa fa-bookmark"
                style="color: #a47c64; margin: 0 8px; text-align: center"
              ></i
              ><a style="color: #90a0a6; font-family: Arial"
                >Front-End Web Developer Certificate</a
              >
            </p>

            <div
              class="div-mtn-moarefi"
              style="
                margin-top: 20px;
                float: left;
                direction: ltr;
                display: flex;
                flex-direction: row;
                justify-content: center;
                text-align: center;
              "
            >
              <!-- <p
                class="mtn-moarefi"
                style="font-family: Arial; text-align: center; font-size: 15px"
              >
                Hossein Heydari who has successfully completed the
                PROJECT-ORIENTED COURSE IN FRONT-END WEB DEVELOPMENT with
                PERFECT score
              </p> -->
            </div>
            <div class="div-mtn-moarefi" style="margin-top: 20px">
              <p
                class="mtn-moarefi"
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                "
                @click="myB"
              >
                برای مشاهده
                <a
                  id="myB"
                  class="a_front"
                  style="padding: 0 10px; color: #a47c64"
                  >کلیک </a
                >کنید
              </p>
            </div>
          </div>


          <div
            class="div-education wow animate__animated animate__slideInUp"
            style="width: 90%"
          >
            <img
              src="./assets/images/min.jpg"
              class="logo"
              alt="Vus.js Developer"
              style="max-width: 260px; height: 180px"
            />

            <p
              class="mtn-education"
              style="font-size: 18px; text-align: center"
            >
              <i
                class="fa fa-bookmark"
                style="color: #a47c64; margin: 0 8px; text-align: center"
              ></i
              ><a style="color: #90a0a6; font-family: Arial"
                >Vue.js Developer Certificate</a
              >
            </p>

            <div
              class="div-mtn-moarefi"
              style="
                margin-top: 20px;
                float: left;
                direction: ltr;
                display: flex;
                flex-direction: row;
                justify-content: center;
                text-align: center;
              "
            >
              <!-- <p
                class="mtn-moarefi"
                style="font-family: Arial; text-align: center; font-size: 15px"
              >
                Hossein Heydari who has successfully completed the
                PROJECT-ORIENTED COURSE IN FRONT-END WEB DEVELOPMENT with
                PERFECT score
              </p> -->
            </div>
            <div class="div-mtn-moarefi" style="margin-top: 20px">
              <p
                class="mtn-moarefi"
                id="contact"
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                "
                @click="myC"
              >
                برای مشاهده
                <a
                  id="myB"
                  class="a_front"
                  style="padding: 0 10px; color: #a47c64"
                  >کلیک </a
                >کنید
              </p>
            </div>
          </div>



          <div
            class="div-titr2 wow animate__animated animate__fadeInUp"
            data-wow-duration="0.7s"
            style="margin-top: 20px; margin-bottom: 20px"
          >
            <b class="titr"
              ><i
                class="fa fa-check-circle"
                style="font-size: 15px; margin-left: 8px"
              ></i
              >تماس با من</b
            >
          </div>

          <form action="src/assets/php.php" method="post" class="form" id="app">
            <input
              type="text"
              name="name"
              class="txt wow animate__animated animate__fadeInRight"
              id="name"
              placeholder="نام"
              style="margin-top: 40px"
              v-model="$store.state.name"
            />

            <div
              style="
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                width: 90%;
                margin-top: 10px;
                margin-bottom: 0px;
                color: #a47c64;
              "
            >
              <p
                style="
                  overflow: hidden;
                  text-overflow: ellipsis;
                  text-align: right;
                "
              >
                {{ $store.state.txt_name }} {{ $store.state.name }}
              </p>
            </div>

            <input
              type="text"
              name="family"
              class="txt wow animate__animated animate__fadeInLeft"
              id="family"
              placeholder="نام خانوادگی"
              style="margin-top: 0px"
              v-model="$store.state.family"
            />

            <div
              style="
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                width: 90%;
                margin-top: 10px;
                margin-bottom: 0px;
                color: #a47c64;
              "
            >
              <p
                style="
                  overflow: hidden;
                  text-overflow: ellipsis;
                  text-align: right;
                "
              >
                {{ $store.state.txt_family }} {{ $store.state.family }}
              </p>
            </div>

            <input
              type="email"
              name="email"
              class="txt wow animate__animated animate__fadeInRight"
              id="email"
              placeholder="ایمیل"
              style="margin-top: 0px; padding-left: 10px"
              v-model="$store.state.email"
            />

            <div
              style="
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                width: 90%;
                margin-top: 10px;
                margin-bottom: 0px;
                color: #a47c64;
              "
            >
              <p
                style="
                  overflow: hidden;
                  text-overflow: ellipsis;
                  direction: rtl;
                  float: right;
                  max-width: inherit;
                  text-align: right;
                "
              >
                {{ $store.state.txt_email }} {{ $store.state.email }}
              </p>
            </div>

            <textarea
              class="txt wow animate__animated animate__fadeInLeft"
              name="text"
              id="text"
              placeholder="متن خود را وارد کنید"
              style="margin-top: 0px; height: 200px"
              v-model="$store.state.text"
            ></textarea>

            <button
              class="butn wow animate__animated animate__fadeInRight"
              id="btn"
              ref="btn2"
              disabled
            >
              ارسال
            </button>

            <div
              class="div-footer wow animate__animated animate__fadeInLeft"
              style="width: 100%"
            >
              <p>
                تمامی حقوق مادی و معنوی این سایت متعلق به حسین حیدری بوده و هر
                گونه کپی برداری از این سایت غیر اخلاقی می باشد
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $(document).ready(function () {
      // Add smooth scrolling to all links
      $("a").on("click", function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top,
            },
            800,
            function () {
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            }
          );
        } // End if
      });
    });

    this.count;
  },
  computed: {
    count() {
      let btn2 = this.$refs.btn2;
      if (
        this.$store.state.name == "" ||
        this.$store.state.family == "" ||
        this.$store.state.email == "" ||
        this.$store.state.text == ""
      ) {
        this.$store.state.result = true;
        btn2.disabled = this.$store.state.result;
      } else {
        this.$store.state.result = false;
        btn2.disabled = this.$store.state.result;
      }
    },
  },
  methods: {
    myB() {
      var modal2 = document.getElementById("myModal2");
      var modalImg2 = document.getElementById("img02");
      modal2.style.display = "block";
    },

    myC() {
      var modal3 = document.getElementById("myModal3");
      var modalImg3 = document.getElementById("img03");
      modal3.style.display = "block";
    },
    closeB() {
      var modal2 = document.getElementById("myModal2");
      modal2.style.display = "none";
    },
    closeC() {
      var modal3 = document.getElementById("myModal3");
      modal3.style.display = "none";
    },
  },
  watch: {
    "$store.state.name"() {
      this.count;
      if (this.$store.state.name != "") {
        this.$store.state.txt_name = "نام شما : ";
      } else {
        this.$store.state.txt_name = "";
      }
    },
    "$store.state.family"() {
      this.count;
      if (this.$store.state.family != "") {
        this.$store.state.txt_family = "نام خانوادگی شما : ";
      } else {
        this.$store.state.txt_family = "";
      }
    },
    "$store.state.email"() {
      this.count;
      if (this.$store.state.email != "") {
        this.$store.state.txt_email = "ایمیل شما : ";
      } else {
        this.$store.state.txt_email = "";
      }
    },
    "$store.state.text"() {
      this.count;
    },
  },
};
</script>


<style scoped>
@media screen and (max-width: 768px) {
  .profile {
    border-bottom: 5px#a47c64 solid;
  }
}
</style>
