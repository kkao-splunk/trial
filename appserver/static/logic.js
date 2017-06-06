
  var signed_in = false;
  function validate() {
    var ad_user = document.getElementById("uname").value;
    var ad_pass = document.getElementById("psw").value;
    var ad_ip = document.getElementById("ip").value;
    if (ad_user === "" || ad_pass === "" || ad_ip === "" ) {
      alert("please enter in all fields");
      return
      }
    sessionStorage.ad_user = ad_user;
    sessionStorage.ad_pass = ad_pass;
    sessionStorage.ad_ip = ad_ip;
    var http = new splunkjs.ProxyHttp("/proxy");
    /*
    try {
    xhttp.open("GET","server_name",true);
    xhttp.send();
    }
    catch {
      alert("sorry something went wrong");
      return;
    }
    */
    window.location.href = 'main';
    }


    function show() {
      console.log(sessionStorage.ad_pass);
    }


  /*
  function connect(var credentials) {

  }
  function generateToken() {

  }


  constantly do a http request to list for avanti clusters, tasks, and
  services.
  connect(credentials) {
    try {
      genereateToken(credentials);
    }
    catch {
      console.log("Error here");
      return
    }
  }
  */
