import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function ProFile({ name, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;

  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li className={s.info}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.info}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.info}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

ProFile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
