//Objeto colaborador
        function Colaborador(nome, endereco, telefone, site) {

            this._id = new Hash().newHash(nome + telefone);
            this._nome = nome;
            this._endereco = endereco;
            this._telefone = telefone;
            this._site = site;

            this.getId = function () { return this._id }
            this.getNome = function () { return this._nome }
            this.getEndereco = function () { return this._endereco }
            this.getTelefone = function () { return this._telefone }
            this.getSite = function () { return this._site }

            this.equals = function (aluno) {

                if (this._id == aluno.getId()) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    //Objeto