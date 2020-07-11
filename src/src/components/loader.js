export const loader = () => {
    const template = `
    <div class="loader">
        <span class="loader__spinner"></span>
    </div>
    `

    return template;
}


export const runLoader = () => {
    render(document.querySelector('.home'), loader());
}