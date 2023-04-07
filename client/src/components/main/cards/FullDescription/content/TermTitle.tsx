import { ITerm } from '../../../../../features/terms';

type TermTitleProps = {
  text: string | undefined;
  pronunciation: ITerm['pronunciation'];
};

const TermTitle = ({ text, pronunciation }: TermTitleProps) => {
  const pron = pronunciation && pronunciation['all'];
  const formattedText = pron ? `${text} [${pron}]` : text;

  return <h3 className="card-phrase">{formattedText}</h3>;
};

export default TermTitle;
