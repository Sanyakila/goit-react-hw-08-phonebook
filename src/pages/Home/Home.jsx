import { TitleHome, Logo } from "./Home.styled";
import phonebook from 'Image/phonebook.jpg';

export default function Home() {
    return (
        <>
            <TitleHome>Welcome to the Phonebook</TitleHome>
            <Logo><img src={phonebook} alt="Logo" height="300" /></Logo>
        </>
    )
};