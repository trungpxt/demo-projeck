var text = new Date()
let date = text.getDay()
console.log(date)
var MH = ['',"toán",'văn', "anh",'tin','công nghệ','GDKTPT', "lịch sử", "vật lí"]
var week = [
    [],
    [],
    [7,5,5,4,1],
    [2,1,1,8,8]
]
var output = ""

let getdatabeta =()=>{
    document.getElementById('MH1').removeChild()

    let  check = Number(document.getElementById("value").value)
    console.log(check)
    if(check > 1){
        return check
    }if( check = 1){
        alert(" chọn thứ mấy toa mới đưa được")
    }
    
}



let dick =(backdata)=>{
for (i = 0; i <= week.length;i++){
    if(i == backdata){
        for(c = 0 ; c <= 4;c++)
         output += MH[week[i][c]]+"<br>"+ '<br>'
    }
    document.getElementById('MH1').innerHTML = output
}}
