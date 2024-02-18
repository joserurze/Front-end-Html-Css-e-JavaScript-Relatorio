function setDatas() {

    var dataInicial = document.getElementById("dataInicial").value;
    var dataFinal = document.getElementById("dataFinal").value;

    if (dataInicial && dataFinal) {

        var dataInicialFormatada = formatDate(dataInicial);
        var dataFinalFormatada = formatDate(dataFinal);
        var url = "http://localhost:8080/agendamentos/aprovereprov/" + dataInicialFormatada + "/" + dataFinalFormatada;
        window.location.href = url;
    } else {
        alert("Por favor, insira ambas as datas.");
    }

    function formatDate(dateString){
        var data = new Date(dateString);
        //2023/12/01
        var dia = ("0" + data.getDate()).slice(-2);
        var mes = ("0"+ data.getMonth()+1).slice(-2);
        var ano = data.getFullYear();

        return dia + "-"+mes+"-"+ano;
    }

}

