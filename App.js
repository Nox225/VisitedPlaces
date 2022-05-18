import React from 'react'
// import Card from './Proj2/Card'
import Card1 from './Proj4/Card1.js'
// import data from './Proj2/data.js'
import data from './Proj4/data.js'

// export default function App(){

//     const cards = data.map(item => {
//         return (
//             <Card
//                 key={item.id}
//                 {...item}
//                 // item={item}
//                 // image={item.coverImg}
//                 // rating={item.stats.rating}
//                 // reviewCount={item.stats.reviewCount}
//                 // location={item.location}
//                 // title={item.title}
//                 // price={item.price}
//                 // openSpots={item.openSpots}
//             />
//         )
//     })

//     return (
//         <section className="card--list">
//             {cards}
//         </section>
//     )
// }

export default function App(props){

    const cards = data.map(item => {
        return (
            <Card1 
                item={item}
            />
        )
    })

    return(
        <section className='body'>
            {cards}
        </section>
    )
}

//     return (
//         <div className="body">
//             <Card 
//                 image="katie-zeferes.jpg"
//                 rating="2.0"
//                 reviewCount="6"
//                 country="India"
//                 title="Life Lessons with Katie Zeferes"
//                 price="136"
//             />
//             <Card 
//                 image="???"
//                 rating="5.0"
//                 reviewCount={69}
//                 country="USA"
//                 title="Life Lessons with Katie Zeferes"
//                 price="136"
//             />
//         </div>
//     )
// }

// export default function App(){
//     return (
//         <div className="body">
//             <Joke 
//                 setup = "asdfasdf"
//                 punchline="hgjfghj"
//             />
//             <Joke 
//                 setup = "bvncvbn"
//                 punchline="tyutyutyu"
//             />
//             <Joke 
//                 setup = "xcxzv"
//                 punchline="opipi"
//             />
//             <Joke 
//                 setup = "bnmbnmbn"
//                 punchline="qwqweq"
//             />

//         </div>
//     )
// }