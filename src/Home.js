import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
    
    

    return (
        <>
            <div className=" home text-center">
                <div className="container">
                    <div className="space-50"></div>
                    <div className="text-center text-bold text-white h1">
                        Tympass  <br /> 
                    </div>
                    <div className="text-center text-bold text-white h3">
                        with bablah
                    </div>
                    <div className="space-20"></div>
                    <div className="text-center text-white ">
                        web app prototype version 1.0.0
                    </div>
                    <div className="space-20"></div>
                    <div className="gameList">
                        <Link style={{textDecoration:'none'}} to='game1' >
                            <div className="gameBox text-dark p-1 shadow radius-10 bg-white">
                                    ball juggle
                            </div>
                        </Link>
                        <Link style={{textDecoration:'none'}} to='/' >
                            <div className="gameBox text-danger shadow p-1 radius-10 bg-white">
                                    xxx
                            </div>
                        </Link>
                        <Link style={{textDecoration:'none'}} to='/' >
                            <div className="gameBox text-danger shadow p-1 radius-10 bg-white">
                                    xxx
                            </div>
                        </Link>
                        <Link style={{textDecoration:'none'}} to='/' >
                            <div className="gameBox text-danger shadow p-1 radius-10 bg-white">
                                    xxx
                            </div>
                        </Link>
                        <Link style={{textDecoration:'none'}} to='/' >
                            <div className="gameBox text-danger shadow p-1 radius-10 bg-white">
                                    xxx
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}
