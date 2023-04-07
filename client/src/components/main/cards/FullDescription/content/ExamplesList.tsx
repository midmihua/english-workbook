type ExamplesListProps = {
  examples: string[] | undefined;
};

const ExamplesList = ({ examples }: ExamplesListProps) => {
  let content;

  if (examples?.length) {
    content = (
      <div className="phrase-example">
        <span>examples</span>
        <ol>
          {examples.map((example, idx) => (
            <li key={idx}>{example}</li>
          ))}
        </ol>
      </div>
    );
  } else {
    content = null;
  }

  return content;
};

export default ExamplesList;
