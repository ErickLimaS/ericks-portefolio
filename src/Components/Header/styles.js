import styled from 'styled-components'

export const Container = styled.div`

    position: sticky;
    top: 0;
    background-color: #1a5277fc;
    color: #FFF;

    @media(min-width: 769px){
        height: 9vh;
        display: flex;
        flex-direction: column;
        justify-content: center;

        nav{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        nav a span#aaa{
            animation: showLetter 0.1s forwards ;
        }
        nav a span#bbb{
            animation: showLetter 0.7s forwards ;
        }
        nav a span#ccc{
            animation: showLetter 1.2s forwards ;
        }
        nav a span#ddd{
            animation: showLetter 1.6s forwards ;
        }
        nav a span#eee{
            animation: showLetter 2.1s forwards ;
        }
        nav a span#fff{
            animation: showLetter 2.5s forwards ;
        }
        nav a span#ggg{
            animation: showLetter 2.9s forwards ;
        }
        nav a span#hhh{
            animation: showLetter 3.4s forwards ;
        }
        nav a span#iii{
            animation: showLetter 3.8s forwards ;
        }
        nav a span#jjj{
            animation: showLetter 4.3s forwards ;
        }

        #keyframe-anime{
            font-weight: 100;
            animation: blinking 1.6s infinite alternate;
            animation-timing-function: linear;
        }

        @keyframes showLetter{
            0%{
                display: none;
                opacity: 0;
            }
            25%{
                display: none;
                opacity: 0;
            }
            50%{
                display: block;
                opacity: 1;
            }
            100%{
                display: block;
                opacity: 1;
            }
        }

        @keyframes blinking{
            0%{
                opacity: 1;
            }
            50%{
                opacity: 1;
            }
            75%{
                opacity: 0;
            }
            100%{
                opacity: 0;
            }
        }

        .desktop-nav{
            display: flex;
            justify-content: space-evenly;

            div{
                margin: 0 2rem;

                :hover{
                    text-decoration: underline;
                    color: #c0c0c0;
                }
            }
        }

        .dropdown-deactiveted, .dropdown-active{
            display: none;
        }
    }

    @media(max-width: 768px){
        height: 10vh;
        display: flex;
        flex-direction: column;
        justify-content: center;

        nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 2.6rem;
        }

        
        span#keyframe-anime{
            display: none;
        }

        .desktop-nav{
            display: none;
        }

        button{
            padding: 1rem;
            border: 0;
            background-color: transparent;

            i{
                color: #FFF;
                font-size: 2.4rem;
            }
        }

        .dropdown-deactiveted{
            right: 0;
            .dropdown-menu{
                display: none;
            }
        }
        .dropdown-active{
            .dropdown-menu{
                display: block;
                position: absolute;
                background-color: #dedcff;
                padding: 1rem;
                border-radius: 4px;
                width: 70%;
                height: 30vh;

                div{
                    height: 22%;
                    margin: 0.5rem 0;
                    color: #383838;
                    border-bottom: 1px solid blue;

                    a{
                        display: flex;
                        justify-content: center;
                    }
                }
            }
        }
    }
`