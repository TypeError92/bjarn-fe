import { YarnListAccordionCard } from "./YarnAccordionCard"

export function MyBjarnPage(){
    const yarnEntries = []
    for (let i=1; i<=25; i++){
        yarnEntries.push({yarnName: `Yarn ${i}`, yarnInfo: {stat1: 'someInfo', stat2: 'someOtherInfo'}})
    }
    return (
        <>
            <h1>myBjarn</h1>
            <ul className="yarn-list">
                {yarnEntries.map(({yarnName, yarnInfo}, i) => {
                    return (<li key={i}>
                        <YarnListAccordionCard yarnName={yarnName} yarnInfo={yarnInfo}/>
                    </li>)
                })}
            </ul>
        </>
    )
}