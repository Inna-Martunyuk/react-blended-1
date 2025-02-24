import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import  StatisticsItem  from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';
import { id } from 'date-fns/locale';

const icons = {
  1: FaRegThumbsUp,
  2: MdPeople,
  3: MdOutlineProductionQuantityLimits,
  4: GiTreeDoor,
};

const Statistics = ({ title, stats }) => {
  return (
    <div>
      {title && <h3 className={style.title}>{title}</h3>}
      <ul className={style.list}>
        {stats.map(stat => (
          <li key={stat.id} className={style.item}>
            <StatisticsItem
              icon={icons[stat.id]}
              title={stat.title}
              total={stat.total}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;

