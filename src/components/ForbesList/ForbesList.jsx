import style from "./ForbesList.module.css"
import ForbesListItem from "../ForbesListItem/ForbesListItem"
const ForbesList = ({ list }) => {
  return (
    <>
      <div className={style.board}>
        <div className={style.header}>
          <h2 className={style.title}>
            <span className={style.titleTop}>Forbes</span>
            <span className={style.titleBottom}>Leader board</span>
          </h2>
        </div>

        <ul className={style.list}>
          {list.map(lis => <li className={style.item} key={lis.id}>
            <ForbesListItem avatar={lis.avatar} name={lis.name} capital={lis.capital} isIncrease={lis.isIncrease} />
        </li>) 
          }
        </ul>
      </div>
    </>
  );
};

export default ForbesList;
