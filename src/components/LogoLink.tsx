import Link from 'next/link'

/* eslint-disable @next/next/no-img-element */
export default function LogoLink() {
  return (
    <Link href="/">
      <a className="navbar-brand ">
        <img
          className=""
          src="./img/logo.png"
          alt="Logo CodeChella"
          width="200"
          height="64"
        />
      </a>
    </Link>
  )
}
