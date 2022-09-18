// import React, { Component } from 'react'
// import { Players } from '../shared/ListOfPlayers'
// import PlayersPresentation from './PlayersPresentation';
// export class Main extends Component {
//     constructor() {
//         super();
//         this.state = {
//            players: Players
//         };
//     }
//     render() {
//       return <PlayersPresentation players={this.state.players}/>
//     }
//   }
//   export default Main
import React, { Component } from 'react'
import { Films } from '../shared/ListOfFilms'
import FilmsPresentation from './FilmsPresentation';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
           film: Films
        };
      }
      render() {
        return <FilmsPresentation film={this.state.film}/>
      }
    }
    export default Main
    

