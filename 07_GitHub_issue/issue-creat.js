window.onload = function () {
  //创建留言
  var submit1 = document.getElementById("submit1");
  var textarea1 = document.getElementById("textarea1");
  var input1 = document.getElementById("input1");
  var creatissue = document.getElementsByClassName("creatissue");

  //留言交流
  var submit = document.getElementById("submit");
  var form = document.getElementById("form");
  var title = document.getElementById("title");
  var issuelist = document.getElementById("issuelist");
  var issuetalk = document.getElementsByClassName("issuetalk");

  //设置数组存放issue
  var issueContent = [];

  //创建issue
  submit1.onclick = function () {
    if (input1.value && textarea1.value != "") {
      var date = new Date();
      var txt = {
        content: textarea1.value,
        time: date,
      };
      issueContent.unshift(txt);
      title.innerHTML = input1.value;

      creatissue[0].style.display = "none";
      issuetalk[0].style.display = "block";

      fun1();
    }
  };

  //issue讨论
  //绑定单击响应函数
  var arr = [];
  submit.onclick = function () {
    //不往数组传空串
    if (form.value != "") {
      var date = new Date();
      var txt = {
        content: form.value,
        time: date,
      };
      issueContent.unshift(txt);
      //重置html的issue列表

      fun1();
      form.value = "";
    }
    fun2();
  };

  //定义函数，获取删除按钮，遍历，找到数组对应的元素，删除，重新获取，遍历
  function fun2() {
    var btnDelete = document.querySelectorAll(".delete");
    for (i = 0; i < btnDelete.length; i++) {
      btnDelete[i].index = i;
      btnDelete[i].onclick = function () {
        issueContent.splice(this.index, 1);
        fun1();
        fun2();
      };
    }
  }

  //遍历issue数组，需要用 var 声明变量
  function fun1() {
    issuelist.innerHTML = "";
    issueContent.forEach(function (obj) {
      var a = document.createElement("a");
      var li = document.createElement("li");
      var div = document.createElement("div");
      var button = document.createElement("button");

      li.innerHTML = obj.time;
      li.className = "name";
      a.innerHTML = obj.content;
      a.className = "content";
      button.innerHTML = "delete";
      button.className = "delete";
      div.className = "issuebox";

      div.appendChild(li);
      div.appendChild(a);
      div.appendChild(button);
      issuelist.appendChild(div);
    });
  }
};
