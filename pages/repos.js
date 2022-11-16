import Conteudo from "../src/components/Conteudo";
import Link from "../src/components/Link";
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
                            <li key={repo.name}><Link href={repo.html_url}>{repo.name}</Link></li>
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