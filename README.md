# tarcisioemanoel15.github.io
Site Andressa



Relogio

1234567890  30




<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relogio</title>

<style>

    #r1{
        margin-block: inherit;
    border-top: solid;
    background: black;
    color: #f90303c4;
    font-size: -webkit-xxx-large;
    width: 204px;
    text-align: center;
    }
</style>

</head>
<body>

    <input type="text" id="r1">
    


    <script>
        function relogio(){
            const data = new Date();
            const hora = data.getHours();
            const segundo = data.getSeconds();
            const minuto = data.getMinutes();

            if(hora < 10){
                hora="0"+hora;
            }if(minuto < 10){
                minuto="0"+minuto;
            }if(segundo < 10){
                segundo="0"+segundo;
            }
            const horas = `${hora}:${minuto}:${segundo}`;
            document.getElementById('r1').value=horas;

        }
            setInterval(relogio, 1000);
    </script>

</body>
</html>








