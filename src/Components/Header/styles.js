import styled from 'styled-components'

export const Container = styled.div`

    position: sticky;
    top: 0;
    background-color: #1A5277;
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

        #keyframe-anime{
            animation: blinking 1.1s infinite alternate;
            animation-timing-function: linear;
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