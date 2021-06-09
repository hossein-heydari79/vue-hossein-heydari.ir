<template>
  <div>
    <div id="myModal" class="modal">
      <span class="close" @click="closeA"><i class="fa fa-close"></i></span>
      <img
        class="modal-content"
        id="img01"
        :src="require('./assets/images/front.jpg')"
      />
    </div>

    <div id="myModal2" class="modal">
      <span class="close" @click="closeD"><i class="fa fa-close"></i></span>
      <img
        class="modal-content"
        id="img04"
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
          style="background-color: rgb(240, 240, 240); padding: 0"
        >
          <slot name="mode" style="width: 100%"></slot>

          <div
            class="div-titr"
            style="margin-top: 50px; border-bottom: 2px #7d6650 solid"
          >
            <b
              class="titr"
              style="color: black; border-bottom: 2px solid #7d6650"
              ><i
                class="fa fa-check-circle"
                style="font-size: 15px; margin-left: 8px"
              ></i
              >معرفی</b
            >
          </div>

          <div class="div-mtn-moarefi">
            <p class="mtn-moarefi" style="color: black">
              حسین حیدری هستم دانشجو کارشناسی رشته علوم کامپیوتر از دانشگاه
              سراسری قم<br /><br />
              متولد 1379 ساکن غرب استان تهران هستم ، چند سالی هست که تو حوزه ی
              برنامه نویسی فعالیت میکنم از جمله در عرصه ی بازی سازی ، توسعه ی
              اپلیکیشن های اندروید ، طراحی و توسعه ی وب .
            </p>
          </div>

          <div class="education">
            <div class="div-education" style="border: 2px#7d6650 solid">
              <a href="http://www.helli-malard.ir/"
                ><img
                  src="./assets/images/sampad2.png"
                  class="logo"
                  alt="Sampad"
              /></a>
              <p class="mtn-education" style="text-align: center; color: black">
                <i
                  class="fa fa-bookmark"
                  style="color: #7d6650; margin: 0 10px"
                ></i>
                1391 - 1397مدرسه علامه حلی ملارد (سمپاد)
              </p>
            </div>

            <div class="div-education" style="border: 2px#7d6650 solid">
              <a href="https://qom.ac.ir/"
                ><img
                  src="./assets/images/qom2.png"
                  class="logo"
                  alt="Qom_University"
              /></a>
              <p
                class="mtn-education"
                id="skills"
                style="text-align: center; color: black"
              >
                <i
                  class="fa fa-bookmark"
                  style="color: #7d6650; margin: 0 10px"
                ></i>
                1397 - 1401 کارشناسی رشته علوم کامپیوتر
              </p>
            </div>
          </div>

          <div
            class="div-titr2"
            style="margin-top: 40px; border-bottom: 2px solid #7d6650"
          >
            <b
              class="titr"
              style="color: black; border-bottom: 2px solid #7d6650"
              ><i
                class="fa fa-check-circle"
                style="font-size: 15px; margin-left: 8px"
              ></i
              >مهارت ها</b
            >
          </div>

          <div class="skill" data-wow-duration="0.7s">
            <p class="onvan-skill" style="color: black">HTML</p>
            <div
              class="skill1"
              style="border: 1px solid#7d6650; color: rgb(240, 240, 240)"
            >
              <div
                class="skill2"
                style="width: 95%; margin: 0 1px; background-color: #7d6650"
              >
                95%
              </div>
            </div>
          </div>

          <div class="skill" data-wow-duration="0.7s">
            <p class="onvan-skill" style="color: black">CSS</p>
            <div
              class="skill1"
              style="border: 1px solid#7d6650; color: rgb(240, 240, 240)"
            >
              <div
                class="skill2"
                style="width: 95%; margin: 0 1px; background-color: #7d6650"
              >
                95%
              </div>
            </div>
          </div>

          <div class="skill" data-wow-duration="0.7s">
            <p class="onvan-skill" style="font-size: 15px; color: black">
              Bootstrap
            </p>
            <div
              class="skill1"
              style="border: 1px solid#7d6650; color: rgb(240, 240, 240)"
            >
              <div
                class="skill2"
                style="width: 95%; margin: 0 1px; background-color: #7d6650"
              >
                95%
              </div>
            </div>
          </div>

          <div class="skill" data-wow-duration="0.7s">
            <p class="onvan-skill" style="color: black">Sass</p>
            <div
              class="skill1"
              style="border: 1px solid#7d6650; color: rgb(240, 240, 240)"
            >
              <div
                class="skill2"
                style="width: 90%; margin: 0 1px; background-color: #7d6650"
              >
                90%
              </div>
            </div>
          </div>

          <div class="skill" data-wow-duration="0.7s">
            <p class="onvan-skill" style="color: black">JS</p>
            <div
              class="skill1"
              style="border: 1px solid#7d6650; color: rgb(240, 240, 240)"
            >
              <div
                class="skill2"
                style="width: 80%; margin: 0 1px; background-color: #7d6650"
              >
                80%
              </div>
            </div>
          </div>

          <div class="skill" data-wow-duration="0.7s">
            <p class="onvan-skill" style="color: black">Vue js</p>
            <div
              class="skill1"
              style="border: 1px solid#7d6650; color: rgb(240, 240, 240)"
            >
              <div
                class="skill2"
                style="width: 95%; margin: 0 1px; background-color: #7d6650"
              >
                95%
              </div>
            </div>
          </div>

          <div class="skill" data-wow-duration="0.7s">
            <p class="onvan-skill" style="color: black">Vuex</p>
            <div
              class="skill1"
              style="border: 1px solid#7d6650; color: rgb(240, 240, 240)"
            >
              <div
                class="skill2"
                style="width: 90%; margin: 0 1px; background-color: #7d6650"
              >
                90%
              </div>
            </div>
          </div>

          <div class="skill" data-wow-duration="0.7s">
            <p class="onvan-skill" style="color: black">Vuetify</p>
            <div
              class="skill1"
              style="border: 1px solid#7d6650; color: rgb(240, 240, 240)"
            >
              <div
                class="skill2"
                style="width: 80%; margin: 0 1px; background-color: #7d6650"
              >
                80%
              </div>
            </div>
          </div>

          <div class="skill" data-wow-duration="0.7s">
            <p class="onvan-skill" style="color: black">jQuery</p>
            <div
              class="skill1"
              style="border: 1px solid#7d6650; color: rgb(240, 240, 240)"
            >
              <div
                class="skill2"
                style="width: 95%; margin: 0 1px; background-color: #7d6650"
              >
                95%
              </div>
            </div>
          </div>

          <div class="skill" data-wow-duration="0.7s">
            <p class="onvan-skill" style="color: black">Ajax</p>
            <div
              class="skill1"
              style="border: 1px solid#7d6650; color: rgb(240, 240, 240)"
            >
              <div
                class="skill2"
                style="width: 90%; margin: 0 1px; background-color: #7d6650"
              >
                90%
              </div>
            </div>
          </div>

          <div class="skill" data-wow-duration="0.7s">
            <p class="onvan-skill" style="color: black">SEO</p>
            <div
              class="skill1"
              style="border: 1px solid#7d6650; color: rgb(240, 240, 240)"
            >
              <div
                class="skill2"
                style="width: 70%; margin: 0 1px; background-color: #7d6650"
              >
                70%
              </div>
            </div>
          </div>

          <div class="skill" data-wow-duration="0.7s">
            <p class="onvan-skill" style="color: black">Wp</p>
            <div
              class="skill1"
              style="border: 1px solid#7d6650; color: rgb(240, 240, 240)"
            >
              <div
                class="skill2"
                style="width: 95%; margin: 0 1px; background-color: #7d6650"
              >
                95%
              </div>
            </div>
          </div>

          <div class="skill" data-wow-duration="0.7s">
            <p class="onvan-skill" style="color: black">Git</p>
            <div
              class="skill1"
              style="border: 1px solid#7d6650; color: rgb(240, 240, 240)"
            >
              <div
                class="skill2"
                style="width: 95%; margin: 0 1px; background-color: #7d6650"
              >
                95%
              </div>
            </div>
          </div>

          <div
            class="container"
            style="width: 90%; margin-top: 50px; padding: 0; margin-bottom: 0px"
          >
            <div class="row">
              <div class="col-6 flexbox">
                <div class="progress-circle progressing p-100">
                  <div
                    class="progress-circle-border"
                    style="border: 5px solid rgb(240, 240, 240) !important"
                  >
                    <div
                      class="left-half-circle"
                      style="border: 5px solid#7d6650"
                    ></div>
                    <div
                      class="right-half-circle"
                      style="border: 5px solid#7d6650"
                    ></div>
                  </div>
                  <div class="progress-circle-content" style="color: black">
                    100%
                  </div>
                </div>

                <p
                  style="
                    margin-top: 0;
                    font-family: Koodak;
                    font-size: 17px;
                    color: black;
                  "
                >
                  ارتباطات
                </p>
              </div>

              <div class="col-6 flexbox">
                <div class="progress-circle progressing p-95">
                  <div
                    class="progress-circle-border"
                    style="border: 5px solid rgb(240, 240, 240) !important"
                  >
                    <div
                      class="left-half-circle"
                      style="border: 5px solid#7d6650"
                    ></div>
                    <div
                      class="right-half-circle"
                      style="border: 5px solid#7d6650"
                    ></div>
                  </div>
                  <div class="progress-circle-content" style="color: black">
                    95%
                  </div>
                </div>

                <p
                  style="
                    margin-top: 0;
                    font-family: Koodak;
                    font-size: 17px;
                    color: black;
                  "
                >
                  کارگروهی
                </p>
              </div>

              <div class="col-6 flexbox">
                <div class="progress-circle progressing p-80">
                  <div
                    class="progress-circle-border"
                    style="border: 5px solid rgb(240, 240, 240) !important"
                  >
                    <div
                      class="left-half-circle"
                      style="border: 5px solid#7d6650"
                    ></div>
                    <div
                      class="right-half-circle"
                      style="border: 5px solid#7d6650"
                    ></div>
                  </div>
                  <div class="progress-circle-content" style="color: black">
                    80%
                  </div>
                </div>

                <p
                  style="
                    margin-top: 0;
                    font-family: Koodak;
                    font-size: 17px;
                    color: black;
                  "
                >
                  مدیریت پروژه
                </p>
              </div>

              <div class="col-6 flexbox">
                <div class="progress-circle progressing p-70">
                  <div
                    class="progress-circle-border"
                    style="border: 5px solid rgb(240, 240, 240) !important"
                  >
                    <div
                      class="left-half-circle"
                      style="border: 5px solid#7d6650"
                    ></div>
                    <div
                      class="right-half-circle"
                      style="border: 5px solid#7d6650"
                    ></div>
                  </div>
                  <div class="progress-circle-content" style="color: black">
                    70%
                  </div>
                </div>

                <p
                  style="
                    margin-top: 0;
                    font-family: Koodak;
                    font-size: 17px;
                    color: black;
                  "
                >
                  خلاقیت
                </p>
              </div>
            </div>
          </div>

          <br id="works" />

          <div
            class="div-titr2"
            data-wow-duration="0.7s"
            style="margin-top: 60px; border-bottom: 2px solid#7d6650"
          >
            <b
              class="titr"
              style="border-bottom: 2px solid#7d6650; color: black"
              ><i
                class="fa fa-check-circle"
                style="font-size: 15px; margin-left: 8px"
              ></i
              >نمونه کار</b
            >
          </div>

          <div
            class="div-education"
            style="width: 90%; border: 2px solid #7d6650"
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
                style="color: #7d6650; margin: 0 8px"
              ></i
              ><a style="color: black">تیم فنجو </a>
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
                  color: black;
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
                  color: black;
                "
              >
                برای مشاهده
                <a
                  href="https://fanjou.ir/blog"
                  style="padding: 0 10px; color: #7d6650"
                  >کلیک </a
                >کنید
              </p>
            </div>
          </div>

          <div
            class="div-titr2"
            data-wow-duration="0.7s"
            style="margin-top: 20px; border-bottom: 2px solid#7d6650"
          >
            <b
              class="titr"
              style="border-bottom: 2px solid#7d6650; color: black"
              ><i
                class="fa fa-check-circle"
                style="font-size: 15px; margin-left: 8px"
              ></i
              >مدارک</b
            >
          </div>

          <div
            class="div-education"
            style="width: 90%; border: 2px solid#7d6650"
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
              ><a style="color: black; font-family: Arial"
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
            ></div>
            <div class="div-mtn-moarefi" style="margin-top: 20px">
              <p
                class="mtn-moarefi"
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  color: black;
                "
              >
                برای مشاهده
                <a
                  id="myA"
                  class="a_front"
                  style="padding: 0 10px; color: #7d6650"
                  @click="myA"
                  >کلیک </a
                >کنید
              </p>
            </div>
          </div>

          <div
            class="div-education"
            style="width: 90%; border: 2px solid#7d6650"
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
              ><a style="color: black; font-family: Arial"
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
            ></div>
            <div class="div-mtn-moarefi" style="margin-top: 20px">
              <p
                class="mtn-moarefi"
                id="contact"
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  color: black;
                "
              >
                برای مشاهده
                <a
                  id="myA"
                  class="a_front"
                  style="padding: 0 10px; color: #7d6650"
                  @click="myD"
                  >کلیک </a
                >کنید
              </p>
            </div>
          </div>

          <div
            class="div-titr2"
            data-wow-duration="0.7s"
            style="
              margin-top: 20px;
              margin-bottom: 20px;
              border-bottom: 2px solid#7d6650;
            "
          >
            <b
              class="titr"
              style="border-bottom: 2px solid#7d6650; color: black"
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
              class="txt"
              id="name"
              placeholder="نام"
              style="
                margin-top: 40px;
                background-color: rgb(240, 240, 240);
                color: black;
                border: 2px solid#7d6650;
              "
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
                  color: black;
                "
              >
                {{ $store.state.txt_name }} {{ $store.state.name }}
              </p>
            </div>

            <input
              type="text"
              name="family"
              class="txt"
              id="family"
              placeholder="نام خانوادگی"
              style="
                margin-top: 0px;
                background-color: rgb(240, 240, 240);
                color: black;
                border: 2px solid#7d6650;
              "
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
                  color: black;
                "
              >
                {{ $store.state.txt_family }} {{ $store.state.family }}
              </p>
            </div>

            <input
              type="email"
              name="email"
              class="txt"
              id="email"
              placeholder="ایمیل"
              style="
                margin-top: 0px;
                padding-left: 10px;
                background-color: rgb(240, 240, 240);
                color: black;
                border: 2px solid#7d6650;
              "
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
                  color: black;
                "
              >
                {{ $store.state.txt_email }} {{ $store.state.email }}
              </p>
            </div>

            <textarea
              class="txt"
              name="text"
              id="text"
              placeholder="متن خود را وارد کنید"
              style="
                margin-top: 0px;
                height: 200px;
                background-color: rgb(240, 240, 240);
                color: black;
                border: 2px solid#7d6650;
              "
              v-model="$store.state.text"
            ></textarea>

            <button
              class="butn"
              id="btn"
              ref="btn1"
              style="
                background-color: #7d6650 !important;
                border: 1px solid#7d6650 !important;
                color: white !important;
              "
              disabled
            >
              ارسال
            </button>

            <div
              class="div-footer"
              style="width: 100%; border: 2px solid#7d6650 !important"
            >
              <p style="color: black">
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
  computed: {
    count() {
      let btn1 = this.$refs.btn1;
      if (
        this.$store.state.name == "" ||
        this.$store.state.family == "" ||
        this.$store.state.email == "" ||
        this.$store.state.text == ""
      ) {
        this.$store.state.result = true;
        btn1.disabled = this.$store.state.result;
      } else {
        this.$store.state.result = false;
        btn1.disabled = this.$store.state.result;
      }
    },
  },
  methods: {
    myA() {
      var modal = document.getElementById("myModal");
      var modalImg = document.getElementById("img0");
      modal.style.display = "block";
    },
    closeA() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    },

    myD() {
      var modal2 = document.getElementById("myModal2");
      var modalImg2 = document.getElementById("img04");
      modal2.style.display = "block";
    },
    closeD() {
      var modal2 = document.getElementById("myModal2");
      modal2.style.display = "none";
    },
  },
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
.txt:focus {
  box-shadow: 2px 5px 9px#7d6650 !important;
  border: 1px#7d6650 solid !important;
}
@media screen and (min-width: 768px) {
  .profile {
    border-left: 5px #7d6650 solid;
  }
}

@media screen and (max-width: 768px) {
  .profile {
    border-bottom: 5px #7d6650 solid;
  }
}
</style>
