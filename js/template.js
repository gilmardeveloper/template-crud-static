//inicio template
        var Template = function () {

            this.tabela = function (dados) {

                return `<table class="container table table-default">
                        <thead>

                            <tr>
                                <th></th>
                                <th>Nome</th>
                                <th>Endereço</th>
                                <th>Telefone</th>
                                <th>Site</th>
                                <th><span class="label label-default back">A</span></th>
                                <th><span class="label label-default back">R</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${dados.map(pegaLinha)}
                        </tbody>
                    </table> `.replace(/,/g, "");

                function pegaLinha(item, index) {
                    return `<tr>
                <td>${index}</td>
                <td>${item.getNome()}</td>
                <td>${item.getEndereco()}</td>
                <td>${item.getTelefone()}</td>
                <td>${item.getSite()}</td>
                <td><a onclick="modalAlterar(${index})" href="#"><span class="glyphicon glyphicon-pencil"></span></a></td>
                <td><a onclick="modalRemover(${index})" href="#"><span class="glyphicon glyphicon-trash"></span></a></td>
                </tr>`;
                };


            };

        };

    //fim template