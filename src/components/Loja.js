import { View,Text,Image,ImageBackground,ScrollView } from "react-native";
import {LojaImg,BoxLoja,LojaBk,CorpoLoja,Titulo,SubTitulo,Textao} from './Styles/StyleLoja'
export default function Loja(){
    return(
        <ScrollView>
        <LojaBk source={require("../../assets/Arquivos/18.jpg")}>
    <CorpoLoja>
        <Titulo>SAVERS</Titulo>
        <BoxLoja>
        <SubTitulo>Tartaruga Hamburguer</SubTitulo>
        <LojaImg source={{uri:"https://i.pinimg.com/564x/f3/54/45/f35445af01547c88c367fcd17ca4ff37.jpg"}}/>
        </BoxLoja>
        <BoxLoja>
        <SubTitulo>Temporada 2 Tá Fraca</SubTitulo>
        <LojaImg source={{uri:"https://i.pinimg.com/564x/f4/5a/97/f45a97b3303bbcc51c040201cfd67a2e.jpg"}}/>
        </BoxLoja>
        <BoxLoja>
        <SubTitulo>Tubarão</SubTitulo>
        <LojaImg source={{uri:"https://i.pinimg.com/564x/39/b5/29/39b529cd6dc1e5c16f96efb49d711acb.jpg"}}/>
        </BoxLoja>
        <BoxLoja>
        <SubTitulo>Peixes</SubTitulo>
        <LojaImg source={{uri:"https://i.pinimg.com/564x/c8/ac/ae/c8acae0070959f74c4d63cff8c743645.jpg"}}/>
        </BoxLoja>
        <SubTitulo>Sobre nós</SubTitulo>
        <Textao>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem a voluptatem. Ipsum nostrum totam aperiam nemo, veniam illo repellat ex enim beatae quidem. Nostrum quisquam consectetur est fugiat blanditiis numquam sunt iste reprehenderit velit nihil inventore rerum excepturi veritatis maiores ea, facilis optio temporibus eius aspernatur fuga ipsam nesciunt suscipit. Veniam neque consequatur qui possimus quam magnam iusto ut, ea ipsum tempora sunt nobis adipisci dolores recusandae corrupti distinctio? Enim fuga deserunt hic repellat odio? Maiores nam perspiciatis hic minima quo. Et itaque quidem corrupti eius at dolor. Reprehenderit necessitatibus iste illo dolor cum nihil ea debitis commodi quos rerum. Laborum unde aspernatur dignissimos laudantium possimus eum nisi optio quos eius dicta alias nostrum, dolores ex enim sit repudiandae ipsa vitae corrupti suscipit corporis eos quae iste. Ratione aliquid soluta officia eveniet! Accusantium asperiores ratione, perferendis ea at facilis laborum consectetur ipsam laudantium deleniti quisquam? Vel pariatur sunt quidem?</Textao>
    </CorpoLoja>
    </LojaBk>
    </ScrollView>
    )
}