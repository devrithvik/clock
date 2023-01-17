const hrs=document.getElementById("hrs");
const min=document.getElementById("min");
const sec=document.getElementById("sec");
const ampm=document.getElementById("ampm");

function update_time(){

    h = new Date().getHours();
    m = new Date().getMinutes();
    s = new Date().getSeconds();
    ampm.innerHTML = "AM";
            
    if(h>12){
        h = h-12;
        ampm.innerHTML = "PM";
    }
    if(h==12){
        ampm.innerHTML = "PM";
    }
    if(h==0){
        h=12;
        ampm.innerHTML = "AM";
    }
     hrs.innerHTML = h;
     min.innerHTML = m;
     sec.innerHTML = s;
     function timeout(){
         update_time();
     }
     setTimeout(timeout,1000);
}
update_time();
