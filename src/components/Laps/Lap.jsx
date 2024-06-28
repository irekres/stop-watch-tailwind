export const Lap = ({ children }) => (
  <tr>
    <td className="text-center">{children.nr}</td>
    <td className="text-center">{children.date}</td>
    <td className="text-center">{children.time}----</td>
  </tr>
);
