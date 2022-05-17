// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Batata",
            "CPF": "148.935.240-62",
            "ocupacao": "Costureiro",
            "email": "batata@gmail.com",
            "telefone": "(31) 9 7829-3498",
            "objetivo": "Divulgação"
        },
        {
            "id": 2,
            "nome": "Deoxu",
            "CPF": "844.169.410-99",
            "ocupacao": "Influencer",
            "email": "deoxugamming@gmail.com",
            "telefone": "(31) 9 6780-2989",
            "objetivo": "Ganhar seguidores"
        },
        {
            "id": 3,
            "nome": "Gabriel",
            "CPF": "315.889.890-03",
            "ocupacao": "Desenvolvedor",
            "email": "gabrielfurst@gmail.com",
            "telefone": "(11) 9 2289-3480",
            "objetivo": "Divulgação"
        },
        {
            "id": 4,
            "nome": "Ribas",
            "CPF": "205.948.700-54",
            "ocupacao": "microempreendedor",
            "email": "rxbas1000@gmail.com",
            "telefone": "(31) 9 8880-2789",
            "objetivo": "Expandir o comércio"
        },
        {
            "id": 5,
            "nome": "Lucas Silva",
            "CPF": "967.885.720-03",
            "ocupacao": "Fotógrafo",
            "email": "lucas@outlook.com",
            "telefone": "(25)9 954-1289",
            "objetivo": "Divulgar fotos"
        },
        {
            "id": 6,
            "nome": "Maia Schulz",
            "CPF": "173.814.560-36",
            "ocupacao": "Estilista",
            "email": "maialz@gmail.com",
            "telefone": "(35) 9 2789-2800",
            "objetivo": "Alcançar pessoas"
        },
        {
            "id": 7,
            "nome": "Charles Santos",
            "CPF": "828.388.310-03",
            "ocupacao": "Coach",
            "email": "charles99vendas@gmail.com",
            "telefone": "(23) 9 8089-9920",
            "objetivo": "Vender curso"
        },
        {
            "id": 8,
            "nome": "Valentina Camargo",
            "CPF": "974.059.470-00",
            "ocupacao": "Designer",
            "email": "valentinactp@outlook.com",
            "telefone": "(22) 5 2802-2982",
            "objetivo": "Divulgação"
        },
        {
            "id": 9,
            "nome": "Albert Newton",
            "CPF": "238.331.000-01",
            "ocupacao": "Cientista",
            "email": "cientista2000@gmail.com",
            "telefone": "(22) 9 2976-6794",
            "objetivo": "Atingir pessoas"
        },
        {
            "id": 10,
            "nome": "Carlos Ferreira",
            "CPF": "057.044.850-65",
            "ocupacao": "Fotógrafo",
            "email": "cfcarlos@hotmail.com",
            "telefone": "(11) 9 8888-1908",
            "objetivo": "Divulgação"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
// localStorage.setItem('db_contato', null)
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "CPF" : contato.CPF,
        "ocupacao": contato.ocupacao,
        "objetivo": contato.objetivo
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].CPF = contato.CPF,
    db.data[index].ocupacao = contato.ocupacao,
    db.data[index].objetivo = contato.objetivo

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}