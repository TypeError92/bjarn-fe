export function MyYarnPage(){
    const yarnEntries = [{caption: 'Card 1', content: 'Content 1'}, {caption: 'Card 2', content: 'Content 2'}, {caption: 'Card 3', content: 'Content 3'}]
    return (
        <>
            <h1>MY YARN</h1>
            <ul className="my-yarn__list">
                {yarnEntries.map(({caption, content}, i) => {
                    return (<li key={i}>
                        <h2>{caption}</h2>
                        <p>{content}</p>
                    </li>)
                })}
            </ul>
        </>
    )
}