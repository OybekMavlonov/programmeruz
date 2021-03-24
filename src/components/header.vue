<template>
  <div>
    <header>
      <v-container>
        <div class="header-nav">
          <div class="contacts d-flex">
            <div class="email">
              <v-icon>mdi-email-outline</v-icon>
              <a href="#">info@programmer.uz</a>
            </div>
            <div class="phone">
              <v-icon>mdi-headphones</v-icon>
              <a href="#">+998330060261</a>
            </div>
          </div>
          <div class="social">
            <a href="#"><v-icon>mdi-youtube</v-icon></a>
            <a href="#"><v-icon>mdi-instagram</v-icon></a>
            <a href="#"><v-icon>mdi-telegram</v-icon> </a>
            <a href="#"><v-icon>mdi-facebook</v-icon> </a>
          </div>
          <div class="loginarea d-flex">
            <div class="login">
              <router-link to="/login">
                Kirish
              </router-link>
              <!-- <a href="#">Kirish</a> -->
            </div>
            <div class="register">
              <a href="#">Ro'yxatdan o'tish</a>
            </div>
          </div>
        </div>
      </v-container>
    </header>
    
    <nav>
      <v-container>
        <div class="d-flex justify-lg-space-between align-center">
          <a href="#" class="logo">
            <img src="../assets/programmer.png" alt="" />
            <span>Programmer UZ</span>
          </a>

          <div class="leftside">
            <a class="main-page" href="#">Bosh sahifa</a>
            <router-link to="/course" class="courses">Kurslar</router-link>
          </div>
        </div>
      </v-container>
    </nav>
  </div>
</template>

<style lang="scss">
a {
  text-decoration: none !important;
}
header {
  background-color: #1e2022;
  .header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .v-icon {
      color: grey;
      font-size: 20px;
      &:hover {
        color: #00CB54;
      }
    }
    a {
      color: grey;
      &:hover {
        color: #00CB54;
      }
    }
    .contacts {
      .email {
        margin-right: 15px;
      }
      .v-icon {
        margin-right: 6px;
      }
    }
    .social {
      a {
        padding: 16px;
        border-right: 1px solid #dee2e6;

        &:first-child {
          border-left: 1px solid #dee2e6;
        }
      }
    }
    .loginarea {
      .login {
        a {
          padding: 16px;
          border-left: 1px solid #dee2e6;
          border-right: 1px solid #dee2e6;
        }
      }
      .register {
        a {
          padding: 16px;
          border-right: 1px solid #dee2e6;
        }
      }
    }
  }
}

nav {
  background-color: #fff;
    // border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  
  .logo {
    display: flex;
    align-items: center;
    margin: 8px 0;
    img {
      width: 50px;
      height: 50px;
    }
    span {
      // margin-bottom: 20px;
      color: grey;
      margin-left: 6px;
      font-size: 20px;
    }
  }

  .leftside {
    a {
      padding: 16px;
      color: grey;
    }
  }
}
</style>
