import "../styles/global.scss";

import { Player } from "../components/Player";
import { Header } from "../components/Header";

import { OpenPlayerContextProvider } from "../contexts/OpenPlayerContext";
import { PlayerContextProvider } from "../contexts/PlayerContext";

import styles from "../styles/app.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <OpenPlayerContextProvider>
      <PlayerContextProvider>
        <div className={styles.wrapper}>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </div>
      </PlayerContextProvider>
    </OpenPlayerContextProvider>
  );
}

export default MyApp;
