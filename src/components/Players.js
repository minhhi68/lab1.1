// // import React, {Component} from 'react';
// // export default class player extends Component {
// //     render(){
// //         return(
// //             <div className='container'>
// //                 <div className='column'>
// //                     <div className='card'>
// //                      <img src='assets/images/cr.jpg'/>
// //                      <h3>Cristiano Ronaldo</h3>
// //                      <p className='title'>Manchester United</p>
// //                      <p><button>Detail</button></p>
// //                      </div>                  

// //                     </div>
// //                     <div className='column'>
// //                         <div className='card'>
// //                             <img src='assets/images/kante.jpg'/>
// //                             <h3>Kante</h3>
// //                             <p className='title'>Chelsea</p>
// //                             <p><button>Detail</button></p>
// //                         </div>
// //                     </div>

// //                     <div className='column'>
// //                         <div className='card'>
// //                             <img src='assets/images/messi.jpg'/>
// //                              <h3>Messi</h3>
// //                              <p className='title'>PSG</p>
// //                              <p><button>Detail</button></p>
// //                         </div>
// //                     </div>

// //                     <div className='column'>
// //                         <div className='card'>
// //                             <img src='assets/images/neymar.jpg'/>
// //                              <h3>Neymar</h3>
// //                              <p className='title'>PSG</p>
// //                              <p><button>Detail</button></p>
// //                         </div>
// //                     </div>

// //                     <div className='column'>
// //                         <div className='card'>
// //                             <img src='assets/images/kane.jpg'/>
// //                             <h3>Kane</h3>
// //                             <p className='title'>Tottenham</p>
// //                             <p><button>Detail</button></p>
// //                         </div>
// //                     </div>
// //                     <div className='column'>
// //                         <div className='card'>
// //                             <img src='assets/images/haaland.jpg'/>
// //                             <h3>Haaland</h3>
// //                             <p className='title'>Manchester City</p>
// //                             <p><button>Detail</button></p>

// //                         </div>
// //                     </div>

// //                 </div>

        
// //         )
// //     }

// // }
// import {Players} from '../shared/ListOfPlayers'

// import React from 'react';

// export default function PlayersVN(){
//     return (
// //         <div className='container'>
// //              <div className='column'>
// //             <div className='card'>
// //                 <img src = ''/>
// //                 <h3></h3>
// //                 <p className='title'></p>
// //                 <p><button></button></p>
// //             </div>
            
// //         </div>
// //          </div>

// //     )
// // }

//    <div className='container'>
//     {Players.map((player)=>(
//         <div className='column'>
//             <div className='card'>
//                 <img src = {player.img}/>
//                 <h3>{player.name}</h3>
//                 <p className='title'>{player.club}</p>
//                 <p><button>Detail</button></p>
//             </div>
//         </div>
//     ))}
//    </div>
//     )
// }

import React from 'react'
import {Players} from '../shared/ListOfPlayers'
export default function PlayersVN() {
    return (
        <div className='container'>
            {Players.map((player)=>(
                 <div className='column'>
                    <div className='card'>
                        <img src = {player.img}/>
                        <h3>{player.name}</h3>
                        <p className='title'>{player.club}</p>
                        <p><button>Detail</button></p>
                    </div>
                 </div>
            
            ))}
        </div>
    )
}
   
