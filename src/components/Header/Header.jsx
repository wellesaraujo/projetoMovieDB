import React from 'react';
import {Link} from 'react-router-dom';
import Styles from './header.module.scss'
export const Header = () => {
    return (
        <header>
            <div className={Styles.left_itens}>
                <Link className={Styles.header_item} to ='/filmes'>Filmes</Link>
                <Link className={Styles.header_item} to ='/series'>Séries</Link>
                <Link className={Styles.header_item} to ='/pessoas'>Pessoas</Link>
                <Link className={Styles.header_item} to ='/mais'>Mais</Link>
            </div>
            <div className={Styles.right_itens}>
                <Link className={Styles.header_item} to ='/login'>Entrar</Link>
                <Link className={Styles.header_item} to ='/singup'>Junte-se ao TMDb</Link>
            </div>
        </header>
    );
}

export default Header;
