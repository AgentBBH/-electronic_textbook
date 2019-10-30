function proverit() {
    pr_otv_zadachi_1 = 2;
    pr_otv_zadachi_2 = 1;
    pr_otv_zadachi_3 = 3;
    pr_otv_zadachi_4 = 4;
    pr_otv_zadachi_5 = 1;

    otv_uch_1 = document.getElementById('z_1').value;
    otv_uch_2 = document.getElementById('z_2').value;
    otv_uch_3 = document.getElementById('z_3').value;
    otv_uch_4 = document.getElementById('z_4').value;
    otv_uch_5 = document.getElementById('z_5').value;

    ball = 0;
    
    if(otv_uch_1 == pr_otv_zadachi_1){
        ball +=1;
    }

    if(otv_uch_2 == pr_otv_zadachi_2){
        ball +=1;
    }

    if(otv_uch_3 == pr_otv_zadachi_3){
        ball +=1;
    }

    if(otv_uch_4 == pr_otv_zadachi_4){
        ball +=1;
    }

    if(otv_uch_5 == pr_otv_zadachi_5){
        ball +=1;
    }
    
    vsego_zadach = 5;

    procent_vip = ball/vsego_zadach * 100;


    document.getElementById('rezultat').innerHTML = "Задания выполнены верно на " + procent_vip + "%.";
}