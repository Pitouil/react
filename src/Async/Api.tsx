// import {useEffect, useState} from "react";
// import axios, {AxiosError, AxiosResponse} from "axios";
//
//
// // interface Word {
// //     name: string,
// //     categorie: string,
// // }
// // interface User {
// //     id: Id,
// //     userame: string,
// //     role: string,
// //     isAdmin: YesNo,
// // }
// // interface UserDrosalys extends User {
// //     caamelotName: string,
// // }
// //
// // type Id = string | number;
// // type YesNo = "yes" | "no" | "y" | "n";
//
// type Word = {
//     name: string,
//     categorie: string,
// }
//
// export function FetchData(){
//     const [words, setWords] = useState<Word[]>([])
//
//     useEffect(()=>{
//         axios.get<Word[]>('https://trouve-mot.fr/api/random')
//             .then((res: AxiosResponse) => setWords(res.data))
//             .catch((err: AxiosError)=>{
//                 console.log(err)
//             })
//
//         // fetch('https://trouve-mot.fr/api/random')
//         //     .then(response=> response.json())
//         //     .then(data => setWords(data))
//         //     .catch(e => console.log(e))
//     })
//
//     return words;
// }