let weeknow = new Date()

let getweekday = weeknow.getDay()+1 
var text =" "
var weekday2_MH=["tin hoc",'tin học','toán ','toán','SHCN']
var weekday3_MH=["ngoại ngữ",'công nghệ','công nghệ','vật lí','vật lí']
var weekday4_MH=['toán','toán','tin học','ngoại ngữ','ngoại ngữ']
var weekday5_MH=["GDKT_PL",'tin học','tin học','ngoại ngữ','ngoại ngữ']
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
let runapp = ()=>{
    for(let c = 1; c <= 8;c++){
        if(getweekday == c){
            if(c > 1){
            nub[c].forEach(app)
                document.getElementById("MH1").innerHTML=text
                function app(item,index){
                    let nube = Number(index)+1
                    text +='tiết ' + nube + ": " + item + `<br>` 
                }
                        }else{
                            document.getElementById("MH1").innerHTML="hôm nay ko có một gì"
                        }   
        }
    }
}



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
