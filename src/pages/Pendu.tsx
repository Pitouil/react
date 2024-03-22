import {useEffect, useState} from "react";
import axios, {AxiosError, AxiosResponse} from "axios";
import {Container} from "react-bootstrap";

// fetch('https://trouve-mot.fr/api/random')
//     .then(response=> response.json())
//     .then(data => setWords(data))
//     .catch(e => console.log(e))

type Word = {
    name: string,
    categorie: string,
}

export type Letter = {
    letter: string,
    revealed: boolean,
}

export const Pendu = () => {
    const [words, setWords] = useState<Word[]>([]);
    const [letters, setLetters] = useState<Letter[]>([]);

    useEffect(() => {
        const fetchWord = async () => {
            await axios.get<Word[]>('https://trouve-mot.fr/api/random')
                .then((res: AxiosResponse) => {
                    console.log(res)
                    setWords(res.data)
                })
                .catch((err: AxiosError) => {
                    console.log(err)
                })
        };

        fetchWord();
    }, []);

    useEffect(() => {
        if (!words.length) return;
        setLetters(words[0].name.split('').map(l => {
            return {
                letter: l,
                revealed: true,
            }
        }))
    }, [words]);

    // function handleChange(target: HTMLInputElement, value: string, word: string[] = explodeWord) {
    //     let indexs: number[] = [];
    //     target.value = '';
    //     letters.map((letter) => {
    //         return (<span>{letter.letter}</span>)
    //     });
    //
    // }


    return (
        <Container>
            <div className={'container'}>
                <h1>Pendu</h1>
                {/*{explodeWord.map((_letter, index) => {*/}
                {/*    return <span key={index} className={'p-1'}>_</span>*/}
                {/*})}*/}
                {letters.map((letter) => {
                    return (<span>{letter.revealed ? letter.letter : "_"}</span>)
                })}
                <input type="text" onChange={(e) => handleChange(e.target, e.target.value)}/>
            </div>
        </Container>
    )
}