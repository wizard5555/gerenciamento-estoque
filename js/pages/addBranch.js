function findAddress() {
    if (cep.value.length !== 8) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(response => response.json())
        .then(data => {

            if (data.erro) {
                alert('CEP inválido!');
            }

            street.value = data.logradouro;
            district.value = data.bairro;
            city.value = data.localidade;
            state.value = data.uf;
        });

   
}

function addBranch() {
    return `
    <h1>Nova Filial</h1>
    
    <section class="row">
        <div class="col">
            <img src="img/undraw_note_list_re_r4u9.svg" width="80%">
        </div>

    <section class="col mb-5">
        <div class="card card-body bg-dark text-white">
        <form action="">
            <label for="name">Nome</label>
            <input id="name" type="text" class="form-control mb-3">
        
            <label for="fiscalcode">CNPJ</label>
            <input id="fiscalcode" type="text" class="form-control mb-3">
        
            <label for="cep">CEP</label>
            <input onblur="findAddress()" id="cep" type="text" class="form-control mb-3">
        
            <label for="street">Logradouro</label>
            <input id="street" type="text" class="form-control mb-3">
        
            <label for="number">Numero</label>
            <input id="number" type="text" class="form-control mb-3">
        
            <label for="district">Bairro</label>
            <input id="district" type="text" class="form-control mb-3">
        
            <label for="city">Cidade</label>
            <input id="city" type="text" class="form-control mb-3">
        
            <label for="state">Estado</label>
            <input id="state" type="text" class="form-control mb-3">
        
            <div class="d-grid">
                <button class="btn btn-primary btn-lg">PRONTO</button>
            </div>
        </form>
        </div>
    </div>
    `;
}