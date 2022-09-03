import style from "./NotFound.module.scss";
import {ReactComponent as NotFoundImage} from "assets/not_found.svg";
import classNames from "classnames";

export default function NotFound() {
  return(
    <div className={classNames({
      [style.container]: true
    })}>
      <NotFoundImage />
    </div>
  );
}