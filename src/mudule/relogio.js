//Relogio
export default function relogio(){
    function relogio(){
        function zero(num){
            return num >= 10 ? num : '0'+num;
        }
        const horass = document.querySelector('div#rel'); 
        const data = new Date();
        const hor = zero(data.getHours());
        const min = zero(data.getMinutes());
        const seg = zero(data.getSeconds());
        const horas = `${hor}:${min}:${seg}`;
        return horass.innerHTML= horas;
    }
    setInterval(relogio, 1000);
    }