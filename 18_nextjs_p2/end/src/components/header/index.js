import Image from "next/image";
import Link from "next/link";

import { navList } from "../../data/nav";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <a>
          {/* Imageコンポーネントは、「<img></img>」と基本的には同義
          差異: 「src="/vercel.svg"」は、画面サイズや解像度に応じて、最適なサイズを返すようになっている。 */}
            {/* 「18_nextjs_p2\end\next.config.js」にて、画像のリサイズの設定をカスタムにしている。 */}
              {/* 「loader={({src}) => src}」: 「src」は画像のパスが設定されている。これをそのまま渡している。 */}
          <Image loader={({src}) => src} src="/vercel.svg" alt="vercel" width={177} height={40} />
        </a>
      </Link>
      <nav>
        <ul className="nav">
          {navList.map((item) => {
            return (
              <li key={item}>
                <Link href={`/${item}`}>
                  <a className="link">{item}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
