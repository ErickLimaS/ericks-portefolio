import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    padding: 0 3rem;
    font-size: 2rem;
    color: #FFF;

    @media(min-width: 1880px){
        font-size: 2.8rem;
    }

    .flex{
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: row;

        div{
            font-size: 1.8rem;
            margin: 1.5rem 0;
            padding: 1rem;
            box-shadow: inset 0px 0px 2px 0px black;
            border-radius: 4px;

            @media(min-width: 1880px){
                font-size: 2.8rem;
            }
        }
    }
    
    nav{
        padding: 2rem 0;
    }

    ul, li{
        list-style-type: none;
    }

    li{
        margin: 1rem 0;
    }

    a{
        :hover{
            border-bottom: 1px solid white;
        }
    }

    small{
        font-size: 1.8rem;
        display: flex;
        justify-content: center;

        @media(min-width: 1880px){
            font-size: 2.4rem;
        }
    }

`