import styled from 'styled-components'

export const Container = styled.div`

    background-color: #9898ff;
    font-size: 2rem;

    @media(min-width: 1024px){
        section.inicio{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
            height: 90vh;

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
    }

    @media(min-width: 427px){

        section.inicio{
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            height: 90vh;

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
    }

    @media(max-width: 425px){

        section.inicio{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            height: 90vh;

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
    }

`