

// let weeknow = new Date()

// let getweekday = weeknow.getDay()+2 


let newfunc = (chooseday)=>{
    const checkday = document.getElementById("value").value
    if(checkday > 1){
        return checkday;
    }if(checkday <= 1){
        alert("chọn đi mày ko chon ai biết đường nào mà lần")
        return;
    }
    }



var text =" "
var weekday2_MH=["tin hoc",'tin học','toán ','toán','SHCN']
var weekday3_MH=["ngoại ngữ",'công nghệ','công nghệ','vật lí','vật lí']
var weekday4_MH=['GDKT_PL','GDKT_PL','tin học','ngoại ngữ','ngoại ngữ']
var weekday5_MH=["lịch sử",`toán`,'công nghệ','ngoại ngữ','ngoại ngữ']
var weekday6_MH=['toán','toán',"HDTN",'ngữ văn','ngữ văn']
var weekday7_MH=['ngữ văn','ngữ văn','ngữ văn','ngoại ngữ','tin học']
var weekday0_MH=["ko cos gi"]

var nub = [
    undefined,
    weekday0_MH,
    weekday2_MH,
    weekday3_MH,
    weekday4_MH,
    weekday5_MH,
    weekday6_MH,
    weekday7_MH,

]
function caidell(data_use){
    const data_conver = data_use
    console.log(data_conver)
    for(let c = 1; c <= 7 ; c++){
        if(data_conver == c){
            nub[c].forEach(app)
            document.getElementById("MH1").innerHTML=text
            function app(it,ind){
                let nube = ind + 1
                text += 'tiết' + nube + ": " + it +`<br>`  + `<br>`
            }
            
        }
    }

}

// let runapp = ()=>{
//     for(let c = 1; c <= 8;c++){
//         if(data_use == c){
//             if(c > 1){
//             nub[c].forEach(app)
//                 document.getElementById("MH1").innerHTML=text
//                 function app(item,index){
//                     console.log(nub[c])
//                     // let nube = Number(index)+1
//                     // text +='tiết ' + nube + ": " + item + `<br>` 
//                 }
//                         }else{
//                             document.getElementById("MH1").innerHTML="hôm nay ko có một gì"
//                         }   
//         }
//     }
// }


// console.log(getweekday)
// function runapp (days){
//     switch(days){
//     case 2:
//        weekday2_MH.forEach(app)
// document.getElementById("MH1").innerHTML=text
// function app(item,index){
//     text +='tiết'+index+ ": "+ item + `<br>`     
//         }
//         break;
//     case 3:
//         weekday3_MH.forEach(app)
// document.getElementById("MH1").innerHTML=text
// function app(item,index){
//     text +='tiết'+index+ ": "+ item + `<br>`
// } 
//         break;
//     case 4:
//         weekday4_MH.forEach(app)
// document.getElementById("MH1").innerHTML=text
// function app(item,index){
//     text +='tiết'+index+ ": "+ item + `<br>`
// } 
//         break;
//     case 5:
//         weekday5_MH.forEach(app)
// document.getElementById("MH1").innerHTML=text
// function app(item,index){
//     text +='tiết'+index+ ": "+ item + `<br>`
// } 
//         break;
//     case 6:
//         weekday6_MH.forEach(app)
// document.getElementById("MH1").innerHTML=text
// function app(item,index){
//     text +='tiết'+index+ ": "+ item + `<br>`
// } 
//         break;
//     case 7:
//         weekday7_MH.forEach(app)
// document.getElementById("MH1").innerHTML=text
// function app(item,index){
//     text +='tiết'+index+ ": "+ item + `<br>`
// }     
//         break;
//     default:
//         weekdayCN_MH.forEach(app)
// document.getElementById("MH1").innerHTML=text
// function app(item,index){
//     text +='tiết'+index+ ": "+ item + `<br>`
// }    
//         break;
// }
// }
