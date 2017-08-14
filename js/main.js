 //principal
        var controller = new Controller();
        var antigoColaborador;
        var template;
        var nome;
        var endereco;
        var telefone;
        var site;

        $(() => {
            init();
            $("#btn-cadastrar").click(inserir);
            $("#btn-alterar").click(alterar);
        });

        function init() {
            template = new Template();
            nome = $("#nome");
            endereco = $("#endereco");
            telefone = $("#telefone");
            site = $("#site");
        };

        function inserir() {

            if (validaCampos()) {
                var colaborador = new Colaborador(nome.val(), endereco.val(), telefone.val(), site.val());
                controller.insert(colaborador);
                carregarTabela();
                sucesso("Cadastrado com suceeso!");
            } else {
                erro("favor preencher todos os campos");
            }
        };

        function alterar() {
            if (validaCampos()) {
                var novoColaborador = new Colaborador(nome.val(), endereco.val(), telefone.val(), site.val());
                controller.update(antigoColaborador, novoColaborador);
                carregarTabela();
                alterado("Alterado com sucesso!");
            } else {
                erro("favor preencher todos os campos");
            }
        };

        function remover() {
            controller.remove(antigoColaborador);
            removido("Removido com sucesso!");
            carregarTabela();
        };

        function carregarTabela() {
            document.getElementById("tabela").innerHTML = template.tabela(controller.getAll());
        };

        function validaCampos() {
            if (nome.val() == "" || endereco.val() == "" || telefone.val() == "" || site.val() == "") {
                return false;
            } else {
                return true;
            }
        };

        function sucesso(msg) {
            $("#btn-cadastrar").attr("disabled", true);
            $(".alert-success").text(msg);
            $(".alert-success").fadeToggle("slow");
            setTimeout(() => $(".alert-success").fadeToggle("slow"), 1500);
            setTimeout(() => $("#btn-cadastrar").removeAttr("disabled"), 1500);
            setTimeout(limparCampos, 1600);
        };

        function alterado(msg) {
            $("#btn-cadastrar").attr("disabled", true);
            $(".alert-success").text(msg);
            $(".alert-success").fadeToggle("slow");
            setTimeout(() => $(".alert-success").fadeToggle("slow"), 1500);
            setTimeout(() => $("#btn-cadastrar").removeAttr("disabled"), 1500);
            setTimeout(() => $('#modal-aluno').modal('toggle'), 1600);

        };

        function removido(msg){
            $("#btn-excluir").attr("disabled", true);
            $(".alert-success").text(msg);
            $(".alert-success").fadeToggle("slow");
            setTimeout(() => $(".alert-success").fadeToggle("slow"), 1500);
            setTimeout(() => $("#btn-excluir").removeAttr("disabled"), 1500);
            setTimeout(() => $('#modal-remover').modal('toggle'), 1600);
        };

        function erro(msg) {
            $(".alert-danger").text(msg);
            $(".alert-danger").fadeToggle("slow");
            setTimeout(() => $(".alert-danger").fadeToggle("slow"), 1500);

        };

        function modalRemover(index){
            antigoColaborador = controller.getElement(index);
            $("#aluno-a-excluir").text(antigoColaborador.getNome());
            $('#modal-remover').modal('toggle');
        };

        function modalInserir() {

            $("#btn-cadastrar").closest(".form-group").removeClass("hide");
            $("#btn-alterar").closest(".form-group").addClass("hide");
            $('#modal-aluno').modal('toggle');
            limparCampos();
        };

        function modalAlterar(index) {

            antigoColaborador = controller.getElement(index);
            nome.val(antigoColaborador.getNome());
            endereco.val(antigoColaborador.getEndereco());
            telefone.val(antigoColaborador.getTelefone());
            site.val(antigoColaborador.getSite());
            $("#btn-cadastrar").closest(".form-group").addClass("hide");
            $("#btn-alterar").closest(".form-group").removeClass("hide");
            $('#modal-aluno').modal('toggle');

        };

        function limparCampos() {
            nome.val("");
            endereco.val("");
            telefone.val("");
            site.val("");
            nome.focus();
        };

  //fim do principal