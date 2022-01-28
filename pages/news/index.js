import { Fragment } from "react/cjs/react.production.min";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextisgreat">next js is a great framework</Link>
        </li>
        <li>
          <Link href="/news/blablabla">bla bla bla</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
