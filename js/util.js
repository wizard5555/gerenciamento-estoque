async function removeCategory (id) {
    if (false === confirm('Tem certeza?')) {
        return;
    }
    await fetch ('http://localhost:8000/categorias/'+id, {
        method: 'DELETE',
    });

   document.querySelector('[data-content="categories"]').dispatchEvent(
            new Event('click')
        )
}