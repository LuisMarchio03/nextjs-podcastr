import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import { OpenPlayerContext } from "../../contexts/OpenPlayerContext";

import styles from "./styles.module.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { useContext, useState } from "react";

export function Header() {
  const { openPlayer } = useContext(OpenPlayerContext);

  const currentDate = format(new Date(), "EEEEEE, d MMM", {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>

      <BiMenuAltRight onClick={openPlayer} />
    </header>
  );
}
