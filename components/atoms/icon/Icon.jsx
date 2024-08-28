
import styles from "./icon.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

export function Icon( {icon, type = 'solid', size = '1x'}) {

  let iconPrefix = 'fas'; // default to solid icons

  switch (type) {
    case 'regular':
      iconPrefix = 'far';
      break;
    case 'brands':
      iconPrefix = 'fab';
      break;
    default:
      iconPrefix = 'fas';
  }
  return (
  <span>
    <FontAwesomeIcon icon={[iconPrefix, icon]} size={size} className="icon" />
  </span>
  )
}

export function IconWithText({ icon, type = 'solid', size = '1x', children }) {
  return (
    <span className={styles["icon-with-text"]}>
      <Icon icon={icon} type={type} size={size} />
      <span style={{ marginLeft: '0.5rem' }}>{children}</span>
    </span>
  );
}
  export default Icon;