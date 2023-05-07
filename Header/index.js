export const Header = (props) => {

    // const {title} = props;
    const {title, links} = props;

    // return `
    //     <header>
    //         <h1 class="site-title">${title}</h1>
    //         <nav>
    //             <a href="#">domů</a>
    //             <a href="#">lekce</a>
    //             <a href="#">náš tým</a>
    //             <a href="#">události</a>
    //             <a href="#">kontakt</a>
    //         </nav>
    //     </header>
    // `;

    return `
        <header>
            <h1 class="site-title">${title}</h1>
            <nav>
            ${ links
                .map(oneLink => `<a href="#">${oneLink}</a>`)
                .join('')}
            </nav>
        </header>
    `;

    // return `
    //     <header>
    //         <h1 class="site-title">${title}</h1>
    //         <nav>
    //             <a href="#">${links}</a>
    //             <a href="#">${links}</a>
    //             <a href="#">${links}</a>
    //             <a href="#">${links}</a>
    //             <a href="#">${links}</a>
    //         </nav>
    //     </header>
    // `;
}