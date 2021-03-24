<template>
  <div class="login">
    <v-container>
      <div class="login-form__wrapper">
        <v-card>
          <v-card-title>Platformaga kirish</v-card-title>
          <div class="v-card__body">
            <form>
              <div class="email">
                <v-icon class="email-icon">mdi-email-outline</v-icon>
                <input
                  type="email"
                  placeholder="Email"
                  v-model="email"
                  id="email"
                  @blur="$v.email.$touch()"
                  class="{invalid: $v.email.$error}"
                />
                <p v-if="!$v.email.email">
                  Please provide a valid email address
                </p>
                <p v-if="!$v.email.required">This field must not be empty</p>
              </div>

              <div class="password">
                <v-icon class="password-icon">mdi-lock-outline</v-icon>
                <input
                  type="password"
                  placeholder="Password"
                  v-model="password"
                  id="password"
                  @blur="$v.email.$touch()"
                />
                <p v-if="!$v.password.required">This field must not be empty</p>
              </div>

              <div class="captcha">
                <div class="spinner">
                  <label>
                    <input
                      type="checkbox"
                      onclick="$(this).attr('disabled','disabled');"
                    />
                    <span class="checkmark"><span>&nbsp;</span></span>
                  </label>
                </div>
                <div class="text">
                  I'm not a robot
                </div>
                <div class="logo">
                  <img
                    src="https://forum.nox.tv/core/index.php?media/9-recaptcha-png/"
                  />
                  <p>reCAPTCHA</p>
                  <small>Privacy - Terms</small>
                </div>
              </div>

              <v-btn class="mt-4 mb-4">
                Kirish
              </v-btn>

              <div class="d-flex justify-lg-space-between mb-6">
                <a href="#" class="forgot">Parolni unutdingizmi?</a>
                <a href="#" class="forgot">Ro'yxatdan o'tish</a>
              </div>
            </form>
          </div>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: "",
      password: ''
    };
  },
  validations: {
    email: {
      required: required,
      email: email,
    },
    password: {
      required,
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  padding: 48px 0;
  background-color: #f8f9fa;

  .login-form__wrapper {
    display: flex;
    justify-content: center;

    .v-card {
      width: 50%;

      &__title {
        border-bottom: 1px solid #dee2e6 !important;
        justify-content: center;
        padding-top: 25px;
      }

      &__body {
        padding: 20px;

        form {
          padding: 0 20px;

          .invalid {
            input {
              border: 1px solid red;
            }
          }

          .email,
          .password {
            position: relative;
            &-icon {
              position: absolute;
              left: 15px;
              top: 8px;
            }
            p {
              color: red;
              margin-bottom: 20px;
            }
            input {
              border: 1px solid grey;
              border-radius: 4px;
              width: 100%;
              padding: 8px 8px 8px 46px;
              margin-bottom: 10px;

              &:focus {
                outline: none;
                border: 1px solid #00cb54;
              }
            }
          }

          .v-btn {
            width: 100%;
            background: #00cb54;
            color: #fff;
          }

          .forgot {
            color: #00cb54;
            font-weight: 500;
          }
        }
      }
    }
  }
}

.v-text-field--outlined.v-input--dense .v-label {
  left: 26px !important;
}

.captcha {
  background-color: #f9f9f9;
  border: 2px solid #d3d3d3;
  border-radius: 5px;
  width: 60%;
  color: #4c4a4b;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 500px) {
  .captcha {
    flex-direction: column;
  }
  .text {
    margin: 0.5em !important;
    text-align: center;
  }
  .logo {
    align-self: center !important;
  }
  .spinner {
    margin: 2em 0.5em 0.5em 0.5em !important;
  }
}

.text {
  font-size: 16px;
  font-weight: 500;
  margin-right: 1em;
}
.spinner {
  position: relative;
  width: 2em;
  height: 2em;
  display: flex;
  margin: 1em;
  align-items: center;
  justify-content: center;
}
input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
input[type="checkbox"] + .checkmark {
  display: inline-block;
  width: 2em;
  height: 2em;
  background-color: #fcfcfc;
  border: 2.5px solid #c3c3c3;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
input[type="checkbox"] + .checkmark span {
  content: "";
  position: relative; /*
	position:absolute;
	border-bottom:3px solid;
	border-right:3px solid;
	border-color:#029f56;*/
  margin-top: -3px;
  transform: rotate(45deg);
  width: 0.75em;
  height: 1.2em;
  opacity: 0;
}
input[type="checkbox"] + .checkmark > span:after {
  content: "";
  position: absolute;
  display: block;
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #029f56;
}
input[type="checkbox"] + .checkmark > span:before {
  content: "";
  position: absolute;
  display: block;
  width: 3px;
  bottom: 0;
  right: 0;
  background-color: #029f56;
}
input[type="checkbox"]:checked + .checkmark {
  animation: 2s spin forwards;
}
input[type="checkbox"]:checked + .checkmark > span {
  animation: 1s fadein 1.9s forwards;
}
input[type="checkbox"]:checked + .checkmark > span:after {
  animation: 0.3s bottomslide 2s forwards;
}
input[type="checkbox"]:checked + .checkmark > span:before {
  animation: 0.5s rightslide 2.2s forwards;
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes bottomslide {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@keyframes rightslide {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}
.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  align-self: flex-end;
  margin: 0.5em 1em;
}
.logo img {
  height: 2em;
  width: 2em;
}
.logo p {
  color: #9d9ba7;
  margin: 0;
  font-size: 10px;
  font-weight: 700;
  // margin:.4em 0 .2em 0;
}
.logo small {
  color: #9d9ba7;
  margin: 0;
  font-size: 10px;
}
@keyframes spin {
  10% {
    width: 0;
    height: 0;
    border-width: 6px;
  }
  30% {
    width: 0;
    height: 0;
    border-radius: 50%;
    border-width: 1em;
    transform: rotate(0deg);
    border-color: rgb(199, 218, 245);
  }
  50% {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    border-width: 4px;
    border-color: rgb(199, 218, 245);
    border-right-color: rgb(89, 152, 239);
  }
  70% {
    border-width: 4px;
    border-color: rgb(199, 218, 245);
    border-right-color: rgb(89, 152, 239);
  }
  90% {
    border-width: 4px;
  }
  100% {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    transform: rotate(720deg);
    border-color: transparent;
  }
}
::selection {
  background-color: transparent;
  color: teal;
}
::-moz-selection {
  background-color: transparent;
  color: teal;
}
</style>
