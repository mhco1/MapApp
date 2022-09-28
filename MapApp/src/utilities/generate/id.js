export default function (){
    return String(Date.now()).slice(-7) + String(Math.floor(Math.random()*Math.pow(10,5)));
}