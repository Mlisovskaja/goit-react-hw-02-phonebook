import { PropTypes } from 'prop-types';
import styles from './filter.module.css';

const Filter = ({ value, onChengeFilter }) => {
  return (
    <div>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChengeFilter}
        />
      </label>
    </div>
  );
};

export default Filter;

Filter.propType = {
  value: PropTypes.string,
  onChengeFilter: PropTypes.func,
};
