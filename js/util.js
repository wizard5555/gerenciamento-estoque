function abrirModal(id) {
    input_excluir.value = id;
}

async function removeCategory () {
    await fetch ('http://localhost:8000/categorias/'+input_excluir.value, {
        method: 'DELETE',
    });

   document.querySelector('[data-content="categories"]').dispatchEvent(
            new Event('click')
        )
}