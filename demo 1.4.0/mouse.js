var text = new Date()
let date = text.getDay()
console.log(date)
var MH = ['',"toán",'văn', "anh",'tin','công nghệ','GDKTPT', "lịch sử", "vật lí"]
var week = [
    [],
    [],
    [7,5,5,4,1],
    [3,1,1,8,8],
    [4,2,2,3,3],
    [1,1,3,6,6],
    [3,3,2,2,2],
    [4,4,5,1,1]
]
let tiet = 1
var output = ""

let getdatabeta =()=>{

    let  check = Number(document.getElementById("value").value)
    console.log(check)
    if(check > 1){
        return check
    }if( check = 1){
        alert(" chọn thứ mấy tao mới biết")
    }
    
}



let dick =(backdata)=>{
for (i = 0; i <= week.length;i++){
    if(i == backdata){
        for(c = 0 ; c <= 4;c++)

         output += `tiết ` + tiet++ +`: `+ MH[week[i][c]]+"<br>"+ '<br>'
    }
    document.getElementById('MH1').innerHTML = output
}}
