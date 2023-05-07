export const Header = (props) => {

    const {title, links} = props;

    return `
        <header>
            <h1 class="site-title">${title}</h1>
            <nav>
            ${ links
                .map(oneLink => `<a href="#">${oneLink}</a>`)
                .join('') }
            </nav>
        </header>
    `;
}