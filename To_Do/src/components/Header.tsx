import { Rocket } from "@phosphor-icons/react";

import style from "./header.module.css";

export function Header() {
	return (
		<header className={style.header}>
			<Rocket size={32} color="#4EA8DE" />

			<h1 className={style.to}>to</h1>
			<h1 className={style.do}>do</h1>
		</header>
	);
}
