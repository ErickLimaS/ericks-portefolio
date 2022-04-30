import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    padding: 0 3rem;
    font-size: 1.8rem;
    
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
        font-size: 1.4rem;
        border-top: 1px solid white;
        display: flex;
        justify-content: center;
    }

`