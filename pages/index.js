import { useState } from "react"
import Conteudo from "../src/components/Conteudo"
import PageTitle from "../src/components/PageTitle"
import Title from "../src/components/Title"

function HomePage() {
    let textoInicial = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Tristique magna sit amet purus gravida quis blandit. Pellentesque adipiscing commodo elit at imperdiet. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Tempor id eu nisl nunc mi ipsum faucibus vitae. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Pellentesque eu tincidunt tortor aliquam nulla. Vitae purus faucibus ornare suspendisse sed. Lorem ipsum dolor sit amet consectetur. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Erat pellentesque adipiscing commodo elit. Mattis enim ut tellus elementum sagittis vitae et leo duis. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Amet nisl purus in mollis nunc sed id semper. Elementum sagittis vitae et leo duis ut diam quam. Et netus et malesuada fames ac. Neque aliquam vestibulum morbi blandit cursus risus at.
    Ut morbi tincidunt augue interdum velit euismod in pellentesque. Lacus vestibulum sed arcu non odio. Sem integer vitae justo eget magna. Quam nulla porttitor massa id. Sodales ut eu sem integer vitae justo eget magna. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Fringilla est ullamcorper eget nulla. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Placerat vestibulum lectus mauris ultrices eros in. Ut lectus arcu bibendum at varius vel.
    Amet nisl purus in mollis nunc. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Magna sit amet purus gravida quis. Condimentum lacinia quis vel eros donec. Quam vulputate dignissim suspendisse in est ante in. Iaculis eu non diam phasellus vestibulum lorem. Malesuada fames ac turpis egestas integer eget aliquet nibh. Consectetur a erat nam at lectus urna. Amet aliquam id diam maecenas. Consectetur adipiscing elit pellentesque habitant morbi tristique. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Eget aliquet nibh praesent tristique magna sit. In hac habitasse platea dictumst vestibulum rhoncus est. Fusce id velit ut tortor pretium viverra suspendisse potenti.
    Sit amet purus gravida quis blandit turpis cursus. Tristique nulla aliquet enim tortor at auctor urna. Viverra justo nec ultrices dui. Egestas maecenas pharetra convallis posuere. Aliquam etiam erat velit scelerisque in. Nec tincidunt praesent semper feugiat. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Ultricies leo integer malesuada nunc vel risus commodo viverra. Tellus molestie nunc non blandit massa enim nec. Lacus laoreet non curabitur gravida arcu. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. In cursus turpis massa tincidunt dui ut ornare lectus. Semper feugiat nibh sed pulvinar proin. Aliquam eleifend mi in nulla. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. At tempor commodo ullamcorper a lacus vestibulum sed arcu.
    `
    const [content, setContent] = useState(textoInicial)

    return (
        <>
            <PageTitle>Home-Nextjs</PageTitle>
            <Title>Pagina Home</Title>
            <Conteudo>
                <input type="text" placeholder="Exemplo de useState" onChange={(e) => setContent(e.target.value)} />
                {content}
            </Conteudo>
        </>
    )
}

export default HomePage