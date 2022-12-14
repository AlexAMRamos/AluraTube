import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset.js";
import Menu from "../src/components/Menu.js";
import { StyledTimeline } from "../src/components/Timeline.js";

function HomePage() {
    const estiloDaHomePage = {
        display: "flex",
        flexDirection: "column",
        flex: 1,
    }
    // console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <div style={estiloDaHomePage}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists}>
                    Conteudo
                </Timeline>
            </div>
        </>
    )
}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

const StyledHeader = styled.div`
    .foto-perfil {
        width: 80px;
        height: 80px;
        border-radius: 50%
    }
    .user-info{
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    .banner{
        width: 100%;
        height: 100 px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            <img className="banner" src={"..src/components/images/background.jpg"} />
            <section className="user-info">
                <img className="foto-perfil" src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}
function Timeline(propriedades) {
    // console.log("Dentro do componente", props.playlists);
    const playlistNames = Object.keys(propriedades.playlists);
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}