import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sorteio from "../pages/Sorteio";


export const Router = ()=> {
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Sorteio name={"MEGA-SENA"} color={"#6BEFA3"}/>}/>
            <Route path="mega-sena" element={<Sorteio name={"MEGA-SENA"} color={"#6BEFA3"} />}/>
            <Route path="quina" element= {<Sorteio name={"QUINA"} color={"#8666EF"}/>} />
            <Route path="lotofacil" element= {<Sorteio name={"LOTOFACIL"} color={"#DD7AC6"}/>} />
            <Route path="lotomania" element= {<Sorteio name={"LOTOMANIA"} color={"#FFAB64"}/>} />
            <Route path="timemania" element= {<Sorteio name={"TIMEMANIA"} color={"#5AAD7D"}/>} />
            <Route path="dia-de-sorte" element= {<Sorteio name={"DIA DE SORTE"} color={"#BFAF83"}/>} />
        </Routes>
        </BrowserRouter>
    )
}