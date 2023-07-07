import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
import  classNames  from "classnames";
function Rating({ rating, maxRating, size }) {
  let icons = new Array(maxRating).fill(0).map((_, index) => {
    return rating > index + 1 ? 1 : 0;
  });
  return (
    <div>
      {icons.map((value, index) => {
        // return <Icon path={mdiStar} size={size} key={index} color={value == 1? "yellow" : null}></Icon>;
        return (
          <Icon
            path={mdiStar}
            size={size}
            key={index}
            color={value == 1 ? "yellow" : null}
            className={classNames("rating__star", {
              "rating__star--active": value == 1,
            })}
          ></Icon>
        );
      })}
    </div>
  );
}

export default Rating;
