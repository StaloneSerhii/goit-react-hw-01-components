import PropTypes from 'prop-types';
import { StaticsStyle } from './Statistics.style';
import { getRandomHexColor } from 'components/rando';

export const Statistics = ({ items }) => {
  return (
    <StaticsStyle>
      <h2>Upload stats</h2>
      <ul>
        {items.map(data => (
          <li key={data.id} style={{ backgroundColor: getRandomHexColor() }}>
            <span> {data.label}</span>
            <span> {data.percentage}%</span>
          </li>
        ))}
      </ul>
    </StaticsStyle>
  );
};

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
