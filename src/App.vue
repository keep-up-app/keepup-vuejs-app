<template>
    <div id="app">
        <NavigationMenu/>
        <main>
          <router-view/>
        </main>
    </div>
</template>

<script>

import NavigationMenu from '@/components/NavigationMenu.vue'

export default {
    components: {
        NavigationMenu
    }
}

</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  @import url('https://fonts.googleapis.com/css?family=Open%20Sans');
  @import url('https://fonts.googleapis.com/css?family=Verdana');

  $lighter: rgb(80, 80, 80);
  $light: rgb(60, 60, 60);
  $dark: rgb(32, 63, 88);
  $darker: rgb(27, 40, 56);

  $dim: rgb(150, 150, 150);

  $blue: #345bdc;
  $red: #e3342f;
  $green: #34c74f;
  
  $theme: $blue;

  * {
    font-family: 'Verdana';
    box-sizing: border-box;
    color: white;
    margin: 0;
    padding: 0;
  }

  body {
    background: $dark;
    font-size: 14px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  a,
  input,
  button {
    color: white;
    text-decoration: none;
    border: none;
    outline: none;
    font-size: 15px;
  }

  a, button {
    cursor: pointer;
  }

  p {
    line-height: 25px;
  }

  h1 {
    margin-bottom: 25px;
    font-family: 'Roboto-Black';
  }

  h2, h3 {
    margin-bottom: 10px;
    font-family: 'Montserrat-Black';
  }

  ul, li {
    text-decoration: none;
    list-style-type: none;
  }

  main {
    position: relative;
    top: 100px;
    height: 5000px;
    widows: 100%;
  }

  section {
    width: 100%;
    height: auto;
    margin-top: 30px;
  }
 
  ::selection {
    background: $theme;
  }

  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .surround {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .noscroll {
    overflow: hidden;
    height: 100%;
  }

  .center-focus {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    overflow: hidden;
  }

  .noselect {
    user-select: none;
  }

  .btn-inverted,
  .btn {
    width: auto;
    height: 33px;
    padding: 5px 20px;
    border-radius: 3px;
    background: none;
    text-align: center;
    line-height: 21px;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    font-family: 'Roboto-Black';
  }

  .btn-inverted {
    color: white;
    border: white 2px solid;
  }

  .btn {
    border: $theme 2px solid;
    background: $theme;
  }

  .single-line {
    position: relative;
    left: 0;
    width: 100%;
    height: 35px;
    padding-left: 10px;
    background: $darker;
    border-radius: 4px;
    border: $dark solid 1px;
    margin-bottom: 15px;
  }

  .single-line:focus {
    border-color: white;
    border-radius: 6px;
  }

  .btn:hover,
  .btn-inverted:hover,
  .simple-link:hover {
    transition: ease-in 150ms;
    opacity: 0.75;
  }

  .right {
    position: absolute;
    right: 0;
  }

  .left {
    position: absolute;
    left: 0;
  }

  .large {
    margin-top: 15px;
    width: 100%;
    display: block;
    text-align: center;
  }

  .space {
    margin-bottom: 30px;
  }

  .center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .error {
    color: $red;
    font-weight: bolder;
  }

  .success {
    color: $green;
    font-weight: bolder;
  }

  .simple-link {
    position: absolute;
    margin-top: 10px;
  }

  .fit {
    opacity: 0.025;
    width: auto;
    height: 100%;
  }
</style>