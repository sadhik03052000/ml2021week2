welcome = function(){
    var y = document.getElementById("input0");
    var p = document.getElementById("bot2");
    p.innerHTML='Nice to meet you'+" "+"Mr./Mrs."+y.value;
    document.getElementById("btn").remove();
    y.disabled = true;
    }
    choose = function(){
    var y = document.getElementById("input2");
    var k = document.getElementById("bot4");
    k.setAttribute("class","bot");
    if(y.value==1){
      k.innerHTML='112';
    } else if(y.value==2){
      k.innerHTML='101';
    }else if(y.value==3){
      k.innerHTML='108';
    }else if(y.value==4){
      k.innerHTML='100';
    }else if(y.value==5){
      k.innerHTML='1091';
    }else if(y.value==6){
      k.innerHTML='181';
    }else if(y.value==7){
      k.innerHTML='1551';
    }else if(y.value==8){
      k.innerHTML='1072';
    }else if(y.value==9){
      k.innerHTML='1073';
    }else if(y.value==10){
      k.innerHTML='1906';
    }else if(y.value==11){
      k.innerHTML='131/135';
    }else if(y.value==12){
      k.innerHTML='1091,1291';
    }
    }
    var n = document.createElement("INPUT");
    menu = function(){
    var y = document.getElementById("input1");
    var p = document.getElementById("val1");
    p.innerHTML="1.national emergency number";
    var s = document.getElementById("val2");
    s.innerHTML="2.fire services number";
    var sa = document.getElementById("val3");
    sa.innerHTML="3.Ambulance service number";
    var sb = document.getElementById("val4");
    sb.innerHTML="4.police emergency service";
    var sc = document.getElementById("val5");
    sc.innerHTML="5.Women helpline";
    var sd = document.getElementById("val6");
    sd.innerHTML="6.women helpline(domestic violence)";
    var se = document.getElementById("val7");
    se.innerHTML="7.kisan call center";
    var sf = document.getElementById("val8");
    sf.innerHTML="8.road accident emergency";
    var sg = document.getElementById("val9");
    sg.innerHTML="9.railway accident emergency";
    var sh = document.getElementById("val10");
    sh.innerHTML="10.LPG leak helpline";
    var si = document.getElementById("val11");
    si.innerHTML="11.Railway enquiry";
    var sj = document.getElementById("val12");
    sj.innerHTML="12.senior citizen helpline";
    var g = document.getElementById("bot3");
    g.innerHTML='Enter your choice:';
    var im = document.createElement("INPUT");
    im.setAttribute("type", "image");
    im.setAttribute("class", "buttoninput");
    im.setAttribute("src", "https://png.pngtree.com/png-clipart/20190613/original/pngtree-send-icon-png-image_3581535.jpg");
    im.setAttribute("id", "btn3");
    im.setAttribute("onclick", "choose()");
    document.body.appendChild(im);
    n.setAttribute("type", "number");
    n.setAttribute("class", "input");
    n.setAttribute("min", "1");
    n.setAttribute("max", "12");
    n.setAttribute("id", "input2");
    document.body.appendChild(n);
    document.getElementById("btn1").remove();
    y.disabled = true;
    }