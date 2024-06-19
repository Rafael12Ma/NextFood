import logo from "@/assets/logo.png";
import classes from "@/Components//main-header/main-header.module.css";
import Image from "next/image";
import Link from "next/link";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image priority src={logo} alt="A plate with food in it" />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <NavLink href="/community">FOdies Community</NavLink>
            <li></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
