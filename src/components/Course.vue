<template>
  <div>
    <main>
      <div class="course-name">
        <div class="wrapper">
          <div class="container">
            <div class="row align-center">
              <v-col md="12">
                <h1>C++ dasturlash tili</h1>
                <h4>
                  C++ dasturlash tilini o'rganish. Dasturlash asoslari va OOP
                </h4>
              </v-col>
            </div>
          </div>
        </div>
      </div>
      <div class="main-part">
        <v-container>
          <v-row>
            <v-col md="12">
              <v-row>
                <v-col md="4">
                  <div class="author" style="border-right: 1px solid grey;">
                    <h3>Muallif:</h3>
                    <h4>Programmer Uz</h4>
                  </div>
                </v-col>
                <v-col md="4">
                  <div class="sections" style="border-right: 1px solid grey;">
                    <h3>Bo'limlar</h3>
                    <ul>
                      <li>Dasturlsh / So'rovlar tillari</li>
                    </ul>
                  </div>
                </v-col>
                <v-col md="4">
                  <div class="type">
                    <div class="standard">Standard kurs</div>
                    <a href="#" class="start">
                      <v-icon>mdi-check-circle</v-icon>Start</a
                    >
                  </div>
                </v-col>
              </v-row>

              <div class="card">
                <h4>Kursda</h4>
                <ul>
                  <li>
                    <v-icon>mdi-headphones</v-icon>
                    <span>56 ta dars</span>
                  </li>
                  <li>
                    <v-icon>mdi-clock-outline</v-icon>
                    <span>08:19:28</span>
                  </li>
                  <li>
                    <v-icon>mdi-information-outline</v-icon>
                    <span>Tarifga asoslangan</span>
                  </li>
                  <li>
                    <v-icon>mdi-crown-outline</v-icon>
                    <span>Sertifikat beriladi</span>
                  </li>
                </ul>
              </div>

              <v-tabs>
                <v-tabs-slider color="#00CB54"></v-tabs-slider>
                <v-tab>
                  Kurs haqida
                </v-tab>
                <v-tab>
                  Kurs tarkibi
                </v-tab>

                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p>
                        C++ dasturlash tili odatda foydalanuvchilarga birinchi
                        bo'lib tavsiya etiladigan til sifatida qaraladi. C++
                        tilini oraliq til sifatida qarashimiz mumkin. U quyi
                        darajada to'g'ridan to'g'ri qurilmalar uchun ham ishlay
                        olsa, yuqori darajadagi til sifatida ham turli
                        loyihalarda namoyon bo'la oladi.
                      </p>
                      <h3>C++ tarixi</h3>
                      <p>
                        C++ yuqori darajadagi dasturlash tili bo'lib, u Bjarne
                        Stroustrup tomonidan C tilining kengaytirilgan varianti
                        sifatida yaratiladi. Bu tilning ustuvor tomoni unda
                        Obyektga yo'naltirilgan dasturlashning mavjud bo'lganida
                        deb qarash mumkin. C++ tili turli yo'nalishdagi
                        mahsulotlar yaralishida ahamiyatli va mashhur bo'lgan,
                        jumladan video o'yinlar, desktop dasturlari, serverlar,
                        turli aloqa vositalarini misol sifatida ko'rish mumkin.
                      </p>
                      <h3>
                        C++ da yaratilgan mashhur dasturlar va platformalar
                      </h3>
                      <ul>
                        <li>Windows;</li>
                        <li>Facebook (server)</li>
                        <li>Adobe Photoshop, Illustrator, Premiere Pro;</li>
                        <li>Mozilla Firefox;</li>
                        <li>MySQL server;</li>
                        <li>AutoDesk Maya;</li>
                      </ul>
                    </v-card-text>
                  </v-card>
                </v-tab-item>

                <v-tab-item>
                  <v-card flat>
                    <v-card-text
                      ><div>
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <v-expansion-panel-header>
                              C++ asoslari
                              <template v-slot:actions>
                                <v-icon color="primary">
                                  mdi-plus
                                </v-icon>
                              </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <ul class="includes">
                                <li v-for="(item, index) in units" :key="index">
                                  <v-icon>mdi-play-outline</v-icon
                                  >{{ item.name }}
                                  <span>{{ item.duration }}</span>
                                </li>
                              </ul>
                            </v-expansion-panel-content>
                          </v-expansion-panel>

                          <v-expansion-panel>
                            <v-expansion-panel-header>
                              Shart operatorlari
                              <template v-slot:actions>
                                <v-icon color="primary">
                                  mdi-plus
                                </v-icon>
                              </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <ul class="includes">
                                <li v-for="(item, index) in units" :key="index">
                                  <v-icon>mdi-play-outline</v-icon
                                  >{{ item.name }}
                                  <span>{{ item.duration }}</span>
                                </li>
                              </ul>
                            </v-expansion-panel-content>
                          </v-expansion-panel>

                          <v-expansion-panel>
                            <v-expansion-panel-header>
                              Takrorlash operatorlari
                              <template v-slot:actions>
                                <v-icon color="primary">
                                  mdi-plus
                                </v-icon>
                              </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <ul class="includes">
                                <li v-for="(item, index) in units" :key="index">
                                  <v-icon>mdi-play-outline</v-icon
                                  >{{ item.name }}
                                  <span>{{ item.duration }}</span>
                                </li>
                              </ul>
                            </v-expansion-panel-content>
                          </v-expansion-panel>

                          <v-expansion-panel>
                            <v-expansion-panel-header>
                              Funksiya va Array
                              <template v-slot:actions>
                                <v-icon color="primary">
                                  mdi-plus
                                </v-icon>
                              </template>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <ul class="includes">
                                <li v-for="(item, index) in units" :key="index">
                                  <v-icon>mdi-play-outline</v-icon
                                  >{{ item.name }}
                                  <span>{{ item.duration }}</span>
                                </li>
                              </ul>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </div></v-card-text
                    >
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      units: [
        { name: "C++ ga kirish", duration: "00:07:16" },
        { name: "Dastlabki buyruqlar", duration: "00:09:11" },
        { name: "O'zgaruvchilar", duration: "00:07:55" },
        { name: "Sodda Arimetika", duration: "00:08:35" },
        { name: "Haqiqiy Sonlar", duration: "00:06:00" },
        { name: "Mantiqiy amallar", duration: "00:11:25" },
      ],
    };
  },
};
</script>

<style lang="scss">
.course-name {
  background: url(http://programmer.uz/front_end/assets/img/breadcrumb-bg.jpg)
    no-repeat;
  background-size: cover;
  .wrapper {
    padding: 60px 0;
    background-color: rgba(0, 0, 0, 0.6);
  }

  h1,
  h4 {
    color: #fff;
  }
  h1 {
    margin-bottom: 10px;
  }
  h4 {
    font-size: 18px;
  }
}

.main-part {
  padding: 50px 0;

  .author {
    padding: 0 20px 40px;

    h3 {
      color: grey;
      font-size: 15px;
    }
  }

  .sections {
    padding: 0 20px 40px;
    h3 {
      color: grey;
      font-size: 15px;
    }

    ul {
      li {
        color: grey;
      }
    }
  }

  .type {
    padding: 0 20px;
    .standard {
      color: #00cb54;
      text-align: center;
      margin-bottom: 6px;
      font-size: 24px;
    }
    .start {
      color: #fff;
      padding: 12px 25px;
      background: #00cb54;
      border-radius: 5px;
      text-align: center;
      margin: 0 auto;
      display: block;
      float: right;

      .v-icon {
        color: #fff;
        font-size: 19px;
        margin-right: 6px;
        margin-bottom: 3px;
      }
    }
  }

  .card {
    padding: 30px;
    margin: 20px 0;
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 8%);
    h4 {
      font-size: 20px;
      margin-bottom: 20px;
    }

    ul {
      li {
        list-style-type: none;
        display: inline;
        margin: 8px 8px 8px 0;
        padding-right: 24px;

        .v-icon {
          color: #00cb54;
          font-size: 16px;
          margin-right: 12px;
          margin-bottom: 4px;
        }
      }
    }
  }
  .v-slide-group__wrapper {
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  .v-tab {
    text-transform: capitalize;
  }
  .v-tab--active {
    color: #00cb54 !important;
  }
  .theme--light.v-tabs-items {
    margin-top: 20px;
  }
  .theme--light.v-expansion-panels .v-expansion-panel {
    margin: 10px 0;
  }

  .v-card__text {
    padding: 0;

    p {
      font-size: 16px;
      line-height: 1.76;
      color: #000;
    }

    h3 {
      font-weight: 500;
      color: #202428;
      line-height: 1.3;
      font-size: 20px;
      margin: 15px 0 10px;
    }
    ul {
      list-style-type: circle;
      color: grey;
      font-size: 16px;
      line-height: 1.7;
    }
  }
  .v-expansion-panel-header {
    background: #f8f9fa;
    border: 1px solid rgba(0, 0, 0, 0.125);
    font-size: 18px;
    font-weight: 500;
    padding: 16px 40px !important;
    position: relative;

    .v-expansion-panel-header__icon {
      position: absolute;
      left: 10px;

      .v-icon {
        color: #00cb54 !important;
      }
    }
  }

  .v-expansion-panel-content__wrap {
    padding: 0 !important;
    .includes {
      padding: 0 !important;
      li {
        padding: 10px 20px;
        border: 1px solid rgba(0, 0, 0, 0.125);
        list-style-type: none;
        cursor: pointer;

        &:hover,
        .v-icon {
          color: #00cb54;
        }

        span {
          float: right;
        }
      }
    }
  }
}
</style>
