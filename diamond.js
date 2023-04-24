n=5;
for(var i=1;i<=n;i++){
    f="";
    for(var j=1;j<=n-i;j++){
        f+=" ";
    }
    for(var k=0;k<2*i-1;k++){
        f+="*";
    }
    console.log(f)
}
for(var x=1;x<=n;x++){
    o="";
    for(var y=0;y<x;y++){
       o+=" " 
    }
    for(var z=2*(n-x)-1;z>0;z--){
        o+="*";
    }
    console.log(o);
}