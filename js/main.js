import login from "./pages/login.js";
import branches from "./pages/branches.js";
import addbranches from "./pages/addBranch.js";
import categories from "./pages/categories.js";
import pagina01 from "./pages/pagina01.js";
import addBranch from "./pages/addBranch.js";
import addCategory from "./pages/addCategory.js"
// import util from "./js/util.js"

let pages = {
    'addBranch': addBranch,
    'login': login,
    'categories': categories,
    'pagina01': pagina01,
    'branches': branches,
    'addCategory': addCategory
};

document.querySelectorAll('[data-action="menu"]').forEach( (item) => {
    item.addEventListener('click', () => {
        // let page = item.getAttibute('data-content');
        // content.innerHTML = window[page]();

        content.innerHTML = pages[item.dataset.content]();
    } );
} )

function alterarConteudo(nome) {
   content.innerHTML = window[nome]();
}