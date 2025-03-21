var menuItem = document.querySelectorAll('.item-menu')

function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}
//seleciona e sai do menu

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)
//expansão de menu