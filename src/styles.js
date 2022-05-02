import styled from 'styled-components'

export const Container = styled.div`

    background-color: #1A5277;
    font-size: 2rem;

    @media(min-width: 1024px){
        section.inicio{
            color: #FFF;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
            height: 91vh;

            div.image{
                width: 40%;
            }

            .introduction{
                width: 40%;

                > div{
                    margin: 8rem 0;
                }

                .text-p1{
                    font-size: 4rem;
                    
                }
                .text-p2{
                    font-size: 3rem;
                    
                }
            }
        }
        
        section#sobre-mim{
            height: 100vh;
            background-color: #FFF;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .heading-section{
                padding: 2rem 0;
                font-size: 3.8rem;
                font-weight: 400;
            }

            .progress-dots-desktop{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                > div{
                    background-color: rgba(0,0,0,.15);
                    border-radius: 100px;
                    margin: 1rem;
                    width: 10px;
                    height: 10px;
                }
                
                .activeted{
                    background-color: rgba(0,0,0,.7);
                }
            }

            .buttons-presentation-mobile{
                display: none;
            }
            .progress-dots-mobile{
                display: none;
            }

            .presentation-pt1.active, .presentation-pt2.active, .presentation-pt3.active{
                display: flex;
                width: 100%;
            }

            .presentation-pt1, .presentation-pt2, .presentation-pt3{

                display: none;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;

                > div{
                    width: 40%;
                }

                .button{
                    font-size: 3rem;
                    font-weight: 400;
                    background-color: transparent;
                    border: 1px solid rgba(0,0,0,.2);
                    border-radius: 100px;
                    width: 25px; 
                    height: 25px;
                    padding: 1rem;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    cursor: pointer;

                    :hover{
                        border: 1px solid rgba(0,0,0,.6);
                        background-color: rgba(0,0,0,.3);
                        color: #FFF;
                    }
                }

                img{
                    width: 80%; 
                    height: auto;
                }

                .text-presentation{

                    h2{
                        font-size: 6rem;
                        font-weight: 600;
                    }

                    h3{
                        font-size: 3rem;
                        font-weight: 400;
                    }

                    p{
                        font-size: 2.4rem;
                        font-weight: 400;
                    }

                    *{
                        margin: 3rem 0;
                    }

                }
            }

            .presentation-pt2{
                display: none;
            }
            
        }

        section#contatos{
            height: 100vh;
            background-color: #FFF;
            padding-top: 10vh;
            display: flex;
            align-items: center;
            flex-direction: column;

            h2.heading-section{
                padding: 2rem 0;
                font-size: 3.8rem;
                font-weight: 400;
            }

            .contact-list{
                height: 60vh;
                width: 90%;
                margin: 2rem 0;

                display:flex;
                align-items: center;

                ul{
                    li{
                        margin: 2rem 0;
                        font-size: 3rem;

                        a{
                            text-decoration: underline;
                        }

                        i{
                            font-size: 4rem;
                            margin-right: 2rem ;
                        }
                    }
                }
            }

        }
    }

    @media(min-width: 427px) and (max-width: 1023px){

        section.inicio{
            color: #FFF;
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            height: 91vh;

            .image{
                width: 40%;
            }

            .introduction{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 40%;

                > div{
                    margin: 1rem 0;
                }

                .text-p1{
                    width: 90%;
                    font-size: 2.8rem;
                    
                }
                .text-p2{
                    width: 90%;
                    font-size: 2rem;
                }
            
            }
        }

        section#sobre-mim{
            background-color: #FFF;
            padding-top: 10vh;
            padding-bottom: 2rem ;
            display: flex;
            flex-direction: column;
            align-items: center;

            .heading-section{
                padding: 4rem;
            }

            .progress-dots-desktop{
                display: none;
            }

            .buttons-presentation-mobile{
                margin: 2rem 0;

                .button{
                    padding: 1rem;
                    background-color: transparent;
                    border-radius: 100px;
                    border: 1px solid rgba(0,0,0,.2);
                    font-size: 1.8rem;
                    margin: 0 1rem;

                    :hover{
                        border: 1px solid rgba(0,0,0,.6);
                        background-color: rgba(0,0,0,.05);
                    }
                }

            }

            .progress-dots-mobile{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                > div{
                    background-color: rgba(0,0,0,.15);
                    border-radius: 100px;
                    margin: 1rem;
                    width: 10px;
                    height: 10px;
                }
                
                .activeted{
                    background-color: rgba(0,0,0,.7);
                }
            }

            .presentation-pt1.active, .presentation-pt2.active, .presentation-pt3.active{
                display: flex;
            }

            .presentation-pt1, .presentation-pt2, .presentation-pt3{
                display: none;
                width: 70%;

                flex-direction: column;
                align-items: center;

                img{
                    width: 30vh;
                    height: auto;
                }

                .text-presentation{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    margin: 0 1rem;

                    h2{
                        font-size: 3rem;
                        font-weight: 400;
                    }

                    h3{
                        font-size: 2.4rem;
                        font-weight: 400;
                    }

                    p{
                        font-size: 1.8rem;
                        font-weight: 400;
                    }

                    *{
                        padding: 1rem 0;
                        
                    }
                }

                .button{
                    display: none;
                }

            }
        }

        section#contatos{
            height: 100vh;
            background-color: #FFF;
            padding-top: 10vh;
            display: flex;
            align-items: center;
            flex-direction: column;

            h2.heading-section{
                padding: 2rem 0;
                font-size: 3.8rem;
                font-weight: 400;
            }

            .contact-list{
                height: 60vh;
                width: 90%;
                margin: 2rem 0;

                display:flex;
                align-items: center;

                ul{
                    li{
                        margin: 2rem 0;
                        font-size: 2.4rem;

                        a{
                            text-decoration: underline;
                        }

                        i{
                            font-size: 4rem;
                            margin-right: 2rem ;
                        }
                    }
                }
            }

        }
    }

    @media(max-width: 425px){

        section.inicio{
            color: #FFF;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            height: 91vh;

            .introduction{
                display: flex;
                flex-direction: column;
                align-items: center;

                > div{
                    margin: 1rem 0;
                }
                .text-p1{
                    width: 90%;
                    font-size: 2.2rem;
                    
                }
                .text-p2{
                    width: 90%;
                    font-size: 2rem;
                }
            
            }


        }

        section#sobre-mim{
            background-color: #FFF;
            padding-top: 10vh;
            padding-bottom: 2rem ;
            display: flex;
            flex-direction: column;
            align-items: center;

            .progress-dots-desktop{
                display:none;
            }

            .heading-section{
                padding: 4rem;
            }

            .buttons-presentation-mobile{
                margin: 2rem 0;

                .button{
                    padding: 1rem;
                    background-color: transparent;
                    border-radius: 100px;
                    border: 1px solid rgba(0,0,0,.2);
                    font-size: 1.8rem;
                    margin: 0 1rem;

                    :hover{
                        border: 1px solid rgba(0,0,0,.6);
                        background-color: rgba(0,0,0,.05);
                    }
                }

                
            }
            .progress-dots-mobile{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;

                    > div{
                        background-color: rgba(0,0,0,.15);
                        border-radius: 100px;
                        margin: 1rem;
                        width: 10px;
                        height: 10px;
                    }
                    
                    .activeted{
                        background-color: rgba(0,0,0,.7);
                    }
                }

            .presentation-pt1.active, .presentation-pt2.active, .presentation-pt3.active{
                display: flex;
            }

            .presentation-pt1, .presentation-pt2, .presentation-pt3{
                display: none;

                flex-direction: column;
                align-items: center;

                img{
                    width: 20vh;
                    height: auto;
                }

                .text-presentation{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    margin: 0 1rem;

                    h2{
                        font-size: 3rem;
                        font-weight: 400;
                    }

                    h3{
                        font-size: 2.4rem;
                        font-weight: 400;
                    }

                    p{
                        font-size: 1.8rem;
                        font-weight: 400;
                    }

                    *{
                        padding: 1rem 0;
                        
                    }
                }

                .button{
                    display: none;
                }

            }
        }

        section#contatos{
            height: 100vh;
            background-color: #FFF;
            padding-top: 10vh;
            display: flex;
            align-items: center;
            flex-direction: column;

            h2.heading-section{
                padding: 2rem 0;
                font-size: 3.8rem;
                font-weight: 400;
            }

            .contact-list{
                height: 60vh;
                width: 90%;
                margin: 2rem 0;

                display:flex;
                align-items: center;

                ul{
                    li{
                        margin: 2rem 0;
                        font-size: 2.2rem;

                        a{
                            text-decoration: underline;
                        }

                        i{
                            font-size: 4rem;
                            margin-right: 2rem ;
                        }
                    }
                }
            }

        }
    }

`

export const Projetos = styled.section`

        padding-top: 10vh;
        color: #FFF;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2.heading-section{
            padding: 2rem 0;
            font-size: 3.8rem;
            font-weight: 400;
        }

        .grid-projects{
            width: 90%;
            display: grid;
            grid-template-columns:  repeat(auto-fill, minmax(335px, 1fr));
            grid-column-gap: 6px;
            grid-row-gap: 6px;
            margin: 0 2rem;

            @media(max-width: 380px){
                grid-template-columns:  repeat(auto-fill, minmax(235px, 1fr));
            }
        }

        .grid-item{
            border: 1px solid #FFF;
            border-radius: 4px;
            margin-bottom: 2rem;
            height: max-content;

            :hover{
                box-shadow: 0px 0px 20px 3px #000000c2;

                h3{
                    text-decoration: underline;
                }
            }
            
            .image {
                justify-content: center;
                align-items: center;
                background-color: #FFF;
                display: flex;

                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 4px;
                }
            }
            .description{
                padding: 1rem; 
                background-color: #FFF;
                color: #000;
                h3{
                    margin: 1rem; 
                    font-weight: 600;
                }
                h4{
                    font-size: 1.8rem;
                    color: #727272;
                    font-weight: 600;
                }
                p{
                    font-size: 2rem;
                    font-weight: 400;
                    margin: 1rem 0; 
                }
                hr{
                    margin: 1rem 0;
                    border: 1px solid #444444;
                }
                div.small{
                    display: flex;
                    flex-wrap: wrap;
                    .p-small{
                        width: max-content!important;
                        color: #FFF;
                        font-size: 1.8rem;
                        margin: 0.5rem 1rem;
                        width: min-content;
                        padding: 0.6rem;
                        background-color: #ff9337;
                        border-radius: 8px;
                    }
                }
            }

        }

        @media(min-width: 427px) and (max-width: 1023px){
            padding-top: 10vh;
        }

        @media(max-width: 425px){
            padding-top: 10vh;

        }

`

