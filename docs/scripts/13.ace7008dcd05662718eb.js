(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+gsa":function(e,t,i){"use strict";i.r(t),i.d(t,"init_render",function(){return n});i("+2oP"),i("3KgV"),i("07d7"),i("5s+n"),i("1Ue7");var a=i("AaG5");function r(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n    <div class="editorial-auth">\n        <div class="editorial-herotext">\n            <p class="hero1">Identification required</p>\n            <p class="hero2">Please contact editorial team if there\'s any inquiry.</p>\n            <div class="editorial-authfields">\n                <input type="text" id="editorial-authid" placeholder="username" />\n                <input type="password" id="editorial-authpw" placeholder="password" />\n                <div class="editorial-auth-action-proceed">\n                    <div class="icon"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    ']);return r=function(){return e},e}function n(){document.body.classList.add("editorial");Object(a.b)(Object(a.a)(r()),document.querySelector(".minion-contents")),o()}var o=function(){$(".editorial-auth-action-proceed").on("click",function(t){e()}),$(".editorial-authfields input").on("keypress",function(t){if(13==t.keyCode)return e(),!1});var e=function(){if(""==document.querySelector(".editorial-authfields #editorial-authid").value||""==document.querySelector(".editorial-authfields #editorial-authpw").value)return alert("Please provide your editorial auth credentials first");var e;e="//thisisallabout.com:5020/auth";var t={username:document.querySelector(".editorial-authfields #editorial-authid").value,password:document.querySelector(".editorial-authfields #editorial-authpw").value};document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){if(document.querySelector(".minion-dataload").setAttribute("status","dl_d_0"),e.error)return alert("Unable to post a new article to tracker. ERR_MSG_CODE: "+JSON.stringify(e.error));localStorage.setItem("tiaa_stuart_edt_ac_t",e.token),window.location.reload(!1)}).catch(function(e){return alert("Unable to post a new article to tracker. ERR_MSG_CODE: "+e)})}}}}]);