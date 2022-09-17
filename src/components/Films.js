import React, {Component} from 'react';
export default class films extends Component {
    render(){
        return(
            <div className='container'>
                <div className='column'>
                    <div className='card'>
                     <img src='assets/movies/13rw.jpg'/>
                     <h3>13 Reasons why</h3>
                     <p className='title'>2018</p>
                     <p><button>USA</button></p>
                     </div>                  

                    </div>
                    <div className='column'>
                        <div className='card'>
                            <img src='assets/movies/avengers.jpg'/>
                            <h3>Avengers: Endgame</h3>
                            <p className='title'>2019</p>
                            <p><button>USA</button></p>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='card'>
                            <img src='assets/movies/breakingbad.jpg'/>
                             <h3>Breaking Bad</h3>
                             <p className='title'>2008</p>
                             <p><button>USA</button></p>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='card'>
                            <img src='assets/movies/dune.jpg'/>
                             <h3>Dune</h3>
                             <p className='title'>2021</p>
                             <p><button>USA</button></p>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='card'>
                            <img src='assets/movies/euphoria.jpg'/>
                            <h3>Euphoria</h3>
                            <p className='title'>2021</p>
                            <p><button>USA</button></p>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='card'>
                            <img src='assets/movies/reptour.jpg'/>
                            <h3>Reputation Tour by Taylor Swift</h3>
                            <p className='title'>2019</p>
                            <p><button>USA</button></p>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='card'>
                            <img src='assets/movies/sexeducation.jpg'/>
                            <h3>Sex Education</h3>
                            <p className='title'>2018</p>
                            <p><button>USA</button></p>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='card'>
                            <img src='assets/movies/yourname.jpg'/>
                            <h3>Your name</h3>
                            <p className='title'>2016</p>
                            <p><button>Japan</button></p>
                        </div>
                    </div>


                    <div className='column'>
                        <div className='card'>
                            <img src='assets/movies/japansinks.jpg'/>
                            <h3>Japan sinks</h3>
                            <p className='title'>2020</p>
                            <p><button>Japan, Netflix</button></p>

                        </div>
                    </div>

                </div>


        )
    }

}