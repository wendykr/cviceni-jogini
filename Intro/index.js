export const Intro = (props) => {

    const {heading, text} = props;

    return `
        <div class="intro">
            <h2>${heading}</h2>
            <p>${text}</p>
        </div>
    `
}