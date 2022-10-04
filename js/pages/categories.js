// function removeCategory (id) {
//     fetch ('http://localhost:8000/categorias/'+id, {
//         method: 'DELETE',
//     });
// }

export default function categories() {
    fetch('http://localhost:8000/categorias')
        .then(response => response.json())
        .then(dados => {
            dados.map(cat => {
                table_categories.innerHTML += `
                    <tr>
                        <td>${cat.id}</td>
                        <td>${cat.nome}</td>    
                        <td>${cat.descricao}</td>
                        <td><img src=${cat.foto} width=100px></td>
                        <td>
                            <button class="btn btn-outline-warning">Editar</button>
                            <button data-bs-toggle="modal" data-bs-target="#modalExcluir" onclick="abrirModal(${cat.id})" class="btn btn-outline-danger">Excluir</button>
                        </td>
                    </tr> 
                `
            })
        });

    // let data = [1, 2, 3, 4, 5].map( (item) => {
    //     return `
    //         <tr>
    //             <td>${item}</td>
    //             <td>Informática</td>
    //             <td>Descrição</td>
    //             <td>Foto</td>
    //             <td>
    //                 <button>Editar</button>
    //                 <button>Excluir</button>
    //             </td>
    //         </tr>
    //     `;
    // } );

    return `
        <h1>Listar Categorias</h1>
        <hr>

        <table class="table table-hover table-striped">
            <thead class="table-dark">
                <tr>
                    <th>#Ref</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Foto</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody id="table_categories">

            </tbody>

        </table>

<!-- Modal -->
<div class="modal fade" id="modalExcluir" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Você tem certeza?</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Essa ação é irreversível

        <input id="input_excluir" type="hidden">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Não</button>
        <button type="button" class="btn btn-primary" onclick="removeCategory()" data-bs-dismiss="modal">Sim</button>
      </div>
    </div>
  </div>
</div>
    `;
}