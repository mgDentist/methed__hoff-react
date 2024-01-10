import { Container } from "../Container/Container";
import { Logo } from "../components/Logo/Logo";
import { SearchForm } from "../components/SearchForm/SearchForm";
import { Navigation } from "../components/Navigation/Navigation";
import s from "./Header.module.scss";

export const Header = () => (
  <header className={s.header}>
    <Container className={s.container}>
      <div className={s.logo}>
        <Logo></Logo>
      </div>
      <div className={s.search}>
        <SearchForm></SearchForm>
      </div>
      <div className={s.navigation}>
        <Navigation></Navigation>
      </div>
    </Container>
  </header>
);
