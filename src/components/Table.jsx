import { voterDetails } from "../../voterdata";
import Fuse from "fuse.js";

const fuse = new Fuse(voterDetails, {
  keys: ["name"],
  includeScore: true,
  // threshold: .4
});

export default function Table({ query }) {
  const results = query
    ? fuse.search(query)
    : voterDetails.map((item) => ({ item }));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Serial No.</th>
        </tr>
      </thead>

      <tbody>
        {results.map((el, i) => (
          <tr key={i}>
            <td>{el.item.name}</td>
            <td>{el.item["serial number"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
