import { Link, useRouteError } from 'react-router-dom';
import Layout from 'src/components/Layout/Layout';
import style from './Error.module.scss'

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <section className={style.error}>
      <div className="container">
        <h1>
          Not found
        </h1>
        <Link to='/'>
          Back
        </Link>
      </div>
    </section>
  );
}
