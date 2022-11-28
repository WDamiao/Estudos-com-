import Card from "../src/components/Card";
import Conteudo from "../src/components/Conteudo";
import Link, { StyledLink } from "../src/components/Link";
import ListaRepositorios from "../src/components/ListaRepositorios";
import PageTitle from "../src/components/PageTitle";
import Title from "../src/components/Title";

export default function PageFaq({ repos }) {
    return (
        <>
            <PageTitle>Repositorios-Nextjs</PageTitle>
            <Title>Pagina de Repositórios</Title>
            <Conteudo>
                {
                    <ListaRepositorios>
                        {repos.map((repo) => (
                            <Card key={repo.name}>
                                <h3>{repo.name}</h3>
                                <div className="buttonsContainer">
                                    <StyledLink className="link"><Link href={repo.html_url}>Github</Link></StyledLink>
                                    <StyledLink className="link"><Link href={`https://wdamiao.github.io/${repo.name}`}>Page</Link></StyledLink>
                                </div>
                            </Card>
                        ))}
                    </ListaRepositorios>
                }
            </Conteudo>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://api.github.com/users/wdamiao/repos")
    const repos = await res.json()
    return {
        props: { repos, }, // will be passed to the page component as props
    }
}