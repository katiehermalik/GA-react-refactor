import recentIssues from '../../SeedData/recentIssuesData';

const issuesComponents = recentIssues.map((issue, index) => {
  return <li key={index}><a href="/">{issue.issue} &mdash; {issue.topic}</a></li>
});

const Issues = (props) => {
  return (
    <>
      <h3>Recent Issues</h3>
      <ul>
        {issuesComponents}
      </ul>
    </>
  );
};

export default Issues;