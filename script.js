var str = '~1234567890-+←Tqwertyuiop[]⏎Casdfghjkl;\'\\⏎Szxcvbnm,./SU';
var capson = false;
var shifton = false
for (let i = 0; i < str.length; i++) {
    if(i==14 || i==28 || i==42 || i==54){
        let br = document.createElement("br")
        document.getElementById("keyboard").appendChild(br)
    }
    let btns = document.createElement("button")
    let idn = str.charAt(i)
    
    
    if(idn === 'T'){idn = "TAB"}
    else if(idn === 'S'){idn = "SHIFT"}
    else if(idn === 'C'){idn = "CAPS"}
    else if(idn === 'U'){idn = "SPACE"}
    
    
    if(idn === '⏎'){
        btns.setAttribute("id", "ENTER");
    }
    else{
        btns.setAttribute("id", idn);
    }


    if(idn === 'SPACE'){
        btns.innerHTML = " "
    }
    else{
        btns.innerHTML = idn
    }


    if(idn == '\''){
        btns.setAttribute("onclick", `btnfunc('\\'')`)
    }
    else if(idn == '\\'){
        btns.setAttribute("onclick", `btnfunc('\\\\')`)
    }
    else if(idn =='⏎'){
        btns.setAttribute("onclick", `btnfunc('<br>')`)
    }
    else if(idn =='←'){
        btns.setAttribute("onclick", `btnbackspacefunc()`)
    }
    else if(idn =="TAB"){
        btns.setAttribute("onclick", `btnfunc('&emsp;')`)
    }
    else if(idn =="SHIFT"){
        btns.setAttribute("onclick", `btnshiftfunc()`)
    }
    else if(idn =="CAPS"){
        btns.setAttribute("onclick", `btncapsfunc()`)
    }
    else if(idn =="SPACE"){
        btns.setAttribute("onclick", `btnfunc('&ensp;')`)
    }
    else{
        btns.setAttribute("onclick", `btnfunc('${idn}')`);
    }


    document.getElementById("keyboard").appendChild(btns)
}

var btnfunc = (input) =>{
    let regex = /^[a-z]$/
    if(input.match(regex) && ((capson == true && shifton == false)||(capson == false && shifton == true))){
        document.getElementById("display").innerHTML += 
        input.toUpperCase();
    }
    else{document.getElementById("display").innerHTML += input;}
    if(shifton == true){
        shifton = false;
        changecapt();
    }
}
var btnbackspacefunc = () =>{
    var str = document.getElementById("display").innerHTML;
    if(str.length > 0)
    document.getElementById("display").innerHTML = str.substring(0, str.length - 1);
}
var btnshiftfunc = () =>{
    if(shifton == true)
    shifton = false
    else
    shifton = true;
    changecapt();
}
var btncapsfunc = () =>{
    if(capson == true)
    capson = false
    else
    capson = true;
    changecapt();
}
var changecapt = () =>{
    let btns = Array.from(document.getElementsByTagName("button"));
    let regexs = /^[a-z]$/
    let regexb = /^[A-Z]$/
    btns.forEach(element => {
        if(element.innerHTML.match(regexs)){
            element.innerHTML = element.innerHTML.toUpperCase();
        }
        else if(element.innerHTML.match(regexb)){
            element.innerHTML = element.innerHTML.toLowerCase();
        }
    });
}