type PropertyProps = {
  title: string;
  text?: string | string[] | number;
};

const Property = ({ title, text }: PropertyProps) => {
  const formattedText = Array.isArray(text) ? text.join(', ') : text;

  let content;

  if (formattedText) {
    content = (
      <div className="property">
        <span>{title}</span>
        <p>{formattedText}</p>
      </div>
    );
  } else {
    content = null;
  }

  return content;
};

export default Property;
