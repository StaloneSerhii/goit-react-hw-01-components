export const Statistics = ({ items }) => {
  return (
    <section>
      <h2>Upload stats</h2>

      <ul>
        {items.map(data => (
          <li key={data.id}>
            <span> {data.label}</span>
            <span> {data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
