const Skills = () => {
    return (
      <>
        <h3 className="skills-heading">Knowledge Set</h3>
        <table className="skills">
          <tr>
            <th>Area</th>
            <th>Knowledge</th>
            <th>Classroom (years)</th>
            <th>Working (years)</th>
          </tr>
          <tr>
            <td rowspan="5">Cloud Computing</td>
            <td>AWS</td>
            <td>0.5</td>
            <td>1</td>
          </tr>
          <tr>
            {/* <td>Cloud Computing</td> */}
            <td>GCP</td>
            <td>0.5</td>
            <td>1</td>
          </tr>
          <tr>
            {/* <td>Cloud Computing</td> */}
            <td>Azure</td>
            <td>0.5</td>
            <td>0</td>
          </tr>
          <tr>
            {/* <td>Cloud Computing</td> */}
            <td>Kafka</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            {/* <td>Cloud Computing</td> */}
            <td>Kubernates(K8)</td>
            <td>0.5</td>
            <td>1</td>
          </tr>
          <tr>
            <td rowspan="2">Configeration Management</td>
            <td>Terraform</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            {/* <td>Configeration Management</td> */}
            <td>Chef</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Container Services</td>
            <td>Docker</td>
            <td>1</td>
            <td>0</td>
          </tr>
          <tr>
            <td rowspan="2">Database</td>
            <td>Oracle</td>
            <td>0.5</td>
            <td>10</td>
          </tr>
          <tr>
            {/* <td>Database</td> */}
            <td>Postgres</td>
            <td>2</td>
            <td>0</td>
          </tr>
          <tr>
            <td rowspan="6">Programming</td>
            <td>C</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            {/* <td>Programming</td> */}
            <td>Java</td>
            <td>0.5</td>
            <td>0</td>
          </tr>
          <tr>
            {/* <td>Programming</td> */}
            <td>Java Script</td>
            <td>0</td>
            <td>0.5</td>
          </tr>
          <tr>
            {/* <td>Programming</td> */}
            <td>Perl</td>
            <td>0</td>
            <td>6</td>
          </tr>
          <tr>
            {/* <td>Programming</td> */}
            <td>Python</td>
            <td>2</td>
            <td>4</td>
          </tr>
          <tr>
            {/* <td>Programming</td> */}
            <td>Shell Scripting</td>
            <td>2</td>
            <td>20+</td>
          </tr>
          <tr>
            <td rowspan="2">Web Development</td>
            <td>CSS</td>
            <td>1</td>
            <td>0</td>
          </tr>
          <tr>
            {/* <td>Web Development</td> */}
            <td>HTML</td>
            <td>0</td>
            <td>30</td>
          </tr>

        </table>
      </>
    );
  };
  
  export default Skills;