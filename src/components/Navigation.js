// import React, {Component} from 'react'
// export default class Navigation extends Component {
//     render(){
//         return (
//             <div>
//                 <nav>
//                     <ul className='navigation-ul'>
//                         <li><a className='active' href='#home'>Home</a></li>
//                         <li><a href='#news'>News</a></li>
//                         <li><a href='#about'>About</a></li>
//                         <li><a href='#contact'>Contact</a></li>
//                     </ul>
//                 </nav>
//             </div>
//         )
//     }
// }

import React from 'react'
export default function Navigation(){
    return(
        <nav>
             <ul className='navigation-ul'>
                <li><a className='active' href='#home'>Home</a></li>
                <li><a href='#movies' >Hot movies</a></li>
                <li><a href='#genres'>Genres</a></li>
                <li><a href='#tickets'>Tickets</a></li>
             </ul>
        </nav>
    )
}