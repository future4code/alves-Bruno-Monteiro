import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const ContainerBotoesForm = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const Form = styled.div`
    display: block;
    padding: 15px;
    width: 50%;
    margin: 20px;
`

const ContainerViagens = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`
const Input = styled.input`
    width: 75%;
    margin: 10px;
    height: 1.5rem;
`


const ApplicationFormPage = (props) => {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [texto, setTexto] = useState("")
    const [profissao, setProfissao] = useState("")
    const [pais, setPais] = useState("")

    const navigate = useNavigate()
    const pathParams = useParams()

    const goToPreviousPage = () => {
        navigate(-1)
    }

    const goToTripsPage = () => {
        navigate('/trips')
    }

    const onChangeNome = (event) => {
        setNome(event.target.value);
    }

    const onChangeIdade = (event) => {
        setIdade(event.target.value);
    }

    const onChangeTexto = (event) => {
        setTexto(event.target.value);
    }

    const onChangeProfissao = (event) => {
        setProfissao(event.target.value);
    }

    const onChangePais = (event) => {
        setPais(event.target.value);
    }

    const enviarInscricao = () => {
        const body = {
            "name": nome,
            "age": idade,
            "applicationText": texto,
            "profession": profissao,
            "country": pais
        }
        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/brunomonteiro/trips/${pathParams.tripId}/apply`, body)
            .then(response => {
                alert("Candidatura enviada com sucesso!")
                goToTripsPage()
            })
            .catch(err => {
                alert("Something is wrong, check your data!");
                console.log(err);
            });
    }



    return (
        <div>
            <h3>Inscrever-se</h3>
            <Form>
                <Input type="text" onChange={onChangeNome} placeholder="Nome" value={nome}
                    name={"name"} required></Input>
                <Input type="text" onChange={onChangeIdade} placeholder="Idade" value={idade}
                    name={"idade"} required></Input>
                <Input type="text" onChange={onChangeTexto} placeholder="Por que voc?? gostaria de se candidatar a essa viagem?" value={texto}
                    name={"texto"} required></Input>
                <Input type="text" onChange={onChangeProfissao} placeholder="Profiss??o" value={profissao}
                    name={"profissao"} required></Input>
                <select placeholder="Pa??s" name="country" required="" onChange={onChangePais}>
                    <option value="" disabled="">Escolha um Pa??s</option>
                    <option value="??frica do Sul">??frica do Sul</option>
                    <option value="Alb??nia">Alb??nia</option>Z
                    <option value="Alemanha">Alemanha</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antigua">Antigua</option>
                    <option value="Ar??bia Saudita">Ar??bia Saudita</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Arm??nia">Arm??nia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Austr??lia">Austr??lia</option>
                    <option value="??ustria">??ustria</option>
                    <option value="Azerbaij??o">Azerbaij??o</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrein">Bahrein</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="B??lgica">B??lgica</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermudas">Bermudas</option>
                    <option value="Botsuana">Botsuana</option>
                    <option value="Brasil">Brasil </option>
                    <option value="Brunei">Brunei</option>
                    <option value="Bulg??ria">Bulg??ria</option>
                    <option value="Burkina Fasso">Burkina Fasso</option>
                    <option value="bot??o">bot??o</option>
                    <option value="Cabo Verde">Cabo Verde</option>
                    <option value="Camar??es">Camar??es</option>
                    <option value="Camboja">Camboja</option>
                    <option value="Canad??">Canad??</option>
                    <option value="Cazaquist??o">Cazaquist??o</option>
                    <option value="Chade">Chade</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Cidade do Vaticano">Cidade do Vaticano</option>
                    <option value="Col??mbia">Col??mbia</option>
                    <option value="Congo">Congo</option>
                    <option value="Cor??ia do Sul">Cor??ia do Sul</option>
                    <option value="Costa do Marfim">Costa do Marfim</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cro??cia">Cro??cia</option>
                    <option value="Dinamarca">Dinamarca</option>
                    <option value="Djibuti">Djibuti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="EUA">EUA</option>
                    <option value="Egito">Egito</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Emirados ??rabes">Emirados ??rabes</option>
                    <option value="Equador">Equador</option>
                    <option value="Eritr??ia">Eritr??ia</option>
                    <option value="Esc??cia">Esc??cia</option>
                    <option value="Eslov??quia">Eslov??quia</option>
                    <option value="Eslov??nia">Eslov??nia</option>
                    <option value="Espanha">Espanha</option>
                    <option value="Est??nia">Est??nia</option>
                    <option value="Eti??pia">Eti??pia</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Filipinas">Filipinas</option>
                    <option value="Finl??ndia">Finl??ndia</option>
                    <option value="Fran??a">Fran??a</option>
                    <option value="Gab??o">Gab??o</option>
                    <option value="G??mbia">G??mbia</option>
                    <option value="Gana">Gana</option>
                    <option value="Ge??rgia">Ge??rgia</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Granada">Granada</option>
                    <option value="Gr??cia">Gr??cia</option>
                    <option value="Guadalupe">Guadalupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guiana">Guiana</option>
                    <option value="Guiana Francesa">Guiana Francesa</option>
                    <option value="Guin??-bissau">Guin??-bissau</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Holanda">Holanda</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungria">Hungria</option>
                    <option value="I??men">I??men</option>
                    <option value="Ilhas Cayman">Ilhas Cayman</option>
                    <option value="Ilhas Cook">Ilhas Cook</option>
                    <option value="Ilhas Cura??ao">Ilhas Cura??ao</option>
                    <option value="Ilhas Marshall">Ilhas Marshall</option>
                    <option value="Ilhas Turks & Caicos">Ilhas Turks & Caicos</option>
                    <option value="Ilhas Virgens (brit.)">Ilhas Virgens (brit.)</option>
                    <option value="Ilhas Virgens(amer.)">Ilhas Virgens(amer.)</option>
                    <option value="Ilhas Wallis e Futuna">Ilhas Wallis e Futuna</option>
                    <option value="??ndia">??ndia</option>
                    <option value="Indon??sia">Indon??sia</option>
                    <option value="Inglaterra">Inglaterra</option>
                    <option value="Irlanda">Irlanda</option>
                    <option value="Isl??ndia">Isl??ndia</option>
                    <option value="Israel">Israel</option>
                    <option value="It??lia">It??lia</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Jap??o">Jap??o</option>
                    <option value="Jord??nia">Jord??nia</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Latvia">Latvia</option>
                    <option value="L??bano">L??bano</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Litu??nia">Litu??nia</option>
                    <option value="Luxemburgo">Luxemburgo</option>
                    <option value="Macau">Macau</option>
                    <option value="Maced??nia">Maced??nia</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Mal??sia">Mal??sia</option>
                    <option value="Malaui">Malaui</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marrocos">Marrocos</option>
                    <option value="Martinica">Martinica</option>
                    <option value="Maurit??nia">Maurit??nia</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="M??xico">M??xico</option>
                    <option value="Moldova">Moldova</option>
                    <option value="M??naco">M??naco</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Nicar??gua">Nicar??gua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nig??ria">Nig??ria</option>
                    <option value="Noruega">Noruega</option>
                    <option value="Nova Caled??nia">Nova Caled??nia</option>
                    <option value="Nova Zel??ndia">Nova Zel??ndia</option>
                    <option value="Om??">Om??</option>
                    <option value="Palau">Palau</option>
                    <option value="Panam??">Panam??</option>
                    <option value="Papua-nova Guin??">Papua-nova Guin??</option>
                    <option value="Paquist??o">Paquist??o</option>
                    <option value="Peru">Peru</option>
                    <option value="Polin??sia Francesa">Polin??sia Francesa</option>
                    <option value="Pol??nia">Pol??nia</option>
                    <option value="Porto Rico">Porto Rico</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Qu??nia">Qu??nia</option>
                    <option value="Rep. Dominicana">Rep. Dominicana</option>
                    <option value="Rep. Tcheca">Rep. Tcheca</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Rom??nia">Rom??nia</option>
                    <option value="Ruanda">Ruanda</option>
                    <option value="R??ssia">R??ssia</option>
                    <option value="Saipan">Saipan</option>
                    <option value="Samoa Americana">Samoa Americana</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serra Leone">Serra Leone</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Singapura">Singapura</option>
                    <option value="S??ria">S??ria</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="St. Kitts & Nevis">St. Kitts & Nevis</option>
                    <option value="St. L??cia">St. L??cia</option>
                    <option value="St. Vincent">St. Vincent</option>
                    <option value="Sud??o">Sud??o</option>
                    <option value="Su??cia">Su??cia</option>
                    <option value="Sui??a">Sui??a</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Tail??ndia">Tail??ndia</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tanz??nia">Tanz??nia</option>
                    <option value="Togo">Togo</option>
                    <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                    <option value="Tun??sia">Tun??sia</option>
                    <option value="Turquia">Turquia</option>
                    <option value="Ucr??nia">Ucr??nia</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Uruguai">Uruguai</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietn??">Vietn??</option>
                    <option value="Zaire">Zaire</option>
                    <option value="Z??mbia">Z??mbia</option>
                    <option value="Zimb??bue">Zimb??bue</option>
                </select>
                <ContainerBotoesForm>
                    <button onClick={goToTripsPage}>Voltar</button>
                    <button onClick={enviarInscricao}>Enviar</button>
                </ContainerBotoesForm>
            </Form>
        </div>
    );
}


export default ApplicationFormPage;
