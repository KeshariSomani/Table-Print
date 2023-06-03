function f1(){
    var n,tab="";
    n=parseInt(document.getElementById("t1").value);
    for(var i=1;i<=10;i++){
        tab=tab+(n*i)+"\n";
    }
    document.getElementById("tt").value=tab;
}