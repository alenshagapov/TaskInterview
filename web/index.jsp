<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 1/31/2019
  Time: 7:09 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

<link rel="stylesheet" type="text/css" href="style.css">
<html>
  <head>
    <title>Test Task Shagapov Alen</title>
  </head>
  <body>

  <div class="container pt-5" id="app">
    <div class="row">
      <h1 class="display-2 headline">Friends</h1>
    </div>
    <hr>

    <div class="row" >

      <!--List of friends-->
      <div class="col-md-4">
        <ul class="list-group widget-list">
          <li
                  v-for="(people, index) in peoples"
                  class="list-group-item list-group-item-action widget"
                  v-on:click="selectFriend(index)"
                  v-bind:class="{'active': selectedFriendIndex === index}"
          >
            <img
                    :src="people.image"
                    class="rounded-circle profileImageLittle"
            >
            {{ people.name }} {{people.surname}}
          </li>
        </ul>
      </div>
      <!--end-->



      <!--The information about friend-->
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-5">


            <!--Name and image of friend-->
            <h2 class="widget">{{people.name}}</h2>
            <img
                    v-bind:src="people.image"
                    v-bind:alt="people.name"
                    class="rounded profileImageConf widget"
            >
          </div>
          <!--end-->


          <!--Detail information-->
          <div class="col-md-7 pt-1">
            <h4 class="headline1 widget">Information</h4>

            <ul class="widget-list">
              <li class="widget">Birth - <strong>{{people.birth}}</strong></li>
              <li class="widget">Job - <strong>{{people.job}}</strong></li>
              <li class="widget">Relations - <strong>{{people.relations}}</strong></li>
              <li class="widget">Hometown - <strong>{{people.hometown}}</strong></li>
            </ul>
            <!--end-->


          </div>



        </div>
      </div>
      <!--end of friends info-->

    </div>
  </div>


  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.22/dist/vue.js"></script>
  <script src="test.js"></script>
  <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
  <script src="scrollreveal.js"></script>
  </body>
</html>
