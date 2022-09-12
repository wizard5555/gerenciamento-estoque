function addBranch() {
    return `
    <h1>Nova Filial</h1>
    <form action="">
    <label for="name">Nome</label>
    <input id="name" type="text" class="form-control mb-3">

    <label for="fiscalcode">CNPJ</label>
    <input id="fiscalcode" type="text" class="form-control mb-3">

    <label for="cep">CEP</label>
    <input id="cep" type="text" class="form-control mb-3">

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
    `;
}