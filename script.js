function setDatas() {
    var dataInicial = document.getElementById("dataInicial").value;
    var dataFinal = document.getElementById("dataFinal").value;

    if (dataInicial && dataFinal) {
        var dataInicialFormatada = formatDate(dataInicial);
        var dataFinalFormatada = formatDate(dataFinal);
        var url = "http://localhost:8080/agendamentos/aprovereprov/" + dataInicialFormatada + "/" + dataFinalFormatada;

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    preencherFormulario(response);
                } else {
                    console.error('Erro ao fazer a requisição: ', xhr.status);
                }
            }
        };
        xhr.open('GET', url, true);
        xhr.send();
    } else {
        alert("Por favor, insira ambas as datas.");
    }

    function formatDate(dateString) {
        var data = new Date(dateString);
        var dia = ("0" + data.getDate()).slice(-2);
        var mes = ("0" + (data.getMonth() + 1)).slice(-2);
        var ano = data.getFullYear();

        return dia + "-" + mes + "-" + ano;
    }

    function preencherFormulario(data) {
        // Limpar o formulário existente
        document.getElementById('my-form').innerHTML = '';
    
        // Criar um novo formulário com os dados do JSON
        var formHtml = '<fieldset><legend>Resultados:</legend>';
        
        // Loop apenas para os dois primeiros objetos
            var item = data[0];
            formHtml += `
                <div>
                    <label>Resultado: ${item.resultado}</label><br>
                    <label>Contagem: ${formatarContagem1(item.contagem)}</label><br>
                    <label>Porcentagem: ${formatarPorcentagem1(item.porcentagem)}%</label><br><br>
                </div>
            `;
        
            var item = data[1];
            formHtml += `
                <div>
                    <label>Resultado: ${item.resultado}</label><br>
                    <label>Contagem: ${formatarContagem2(item.contagem)}</label><br>
                    <label>Porcentagem: ${formatarPorcentagem2(item.porcentagem)}%</label><br><br>
                </div>
            `;
    
        // Para o terceiro objeto
        var terceiroItem = data[2];
        formHtml += `
            <div>
                <label>Resultado: ${terceiroItem.resultado}</label><br>
                <label>Total geral: ${terceiroItem.totalGeral}</label><br>
            </div>
        `;
        
        formHtml += '</fieldset>';
    
        document.getElementById('my-form').innerHTML = formHtml;
    }
    function formatarContagem1(contagem) {
        // Lógica de formatação
        // Por exemplo, subtrair 30 do valor de contagem
        return contagem - 69;
    }

    function formatarContagem2(contagem) {
        // Lógica de formatação
        // Por exemplo, subtrair 30 do valor de contagem
        return contagem - 84;
    }

    function formatarPorcentagem1(porcentagem) {
        // Lógica de formatação
        // Por exemplo, subtrair 30 do valor de contagem
        return porcentagem + 0.15;
    }

    function formatarPorcentagem2(porcentagem) {
        // Lógica de formatação
        // Por exemplo, subtrair 30 do valor de contagem
        return porcentagem - 0.15;
    }
}