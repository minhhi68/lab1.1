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

// import React from 'react'
// export default function Navigation(){
//     return(
//         <nav>
//              <ul className='navigation-ul'>
//                 <li><a className='active' href='#home'>Home</a></li>
//                 <li><a href='#movies' >Hot movies</a></li>
//                 <li><a href='#genres'>Genres</a></li>
//                 <li><a href='#tickets'>Tickets</a></li>
//              </ul>
//         </nav>
//     )
// }

import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div>
      <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
          <ul className='navigation-ul'>
              <li><a className='active' href='#home'>Home</a></li>
              <li><a href='#movies'> Hot Movies</a></li>
              <li><a href='#genres'>Genres</a></li>
              <li><a href='#tickets'>Tickets</a></li>
</ul>
          <div style={{position: 'relative'}}>
          <a className='switch-mode' href='#' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }} data-testid="toggle-theme-btn"
        >
          Switch Navigation bar to {!dark ? 'Blueviolet' : 'Light'} mode
         </a>
         </div>
      </nav>
      </div>
  )
}

