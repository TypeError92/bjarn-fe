export function MyYarnPage(){
    const yarnEntries = []
    for (let i=1; i<=25; i++){
        yarnEntries.push({caption: `Caption ${i}`, content: `Content ${i}`})
    }
    return (
        <>
            <h1>MY YARN</h1>
            <ul className="my-yarn__list">
                {yarnEntries.map(({caption, content}, i) => {
                    console.log(i)
                    return (<li key={i}>
                        <h2>{caption}</h2>
                        <p>{content}</p>
                    </li>)
                })}
            </ul>
        </>
    )
}