import { ITerm } from '../../../../features/terms';
import TermActionsPanel from '../../panels/TermActions';
import DefinitionsList from './content/DefinitionsList';
import TermTitle from './content/TermTitle';

type FullDescriptionCardProps = {
  term: ITerm;
};

const FullDescriptionCard = ({ term }: FullDescriptionCardProps) => {
  const { word, pronunciation, results = [] } = term;

  return (
    <div className="card-outer-container">
      <div className="card-content">
        <TermActionsPanel showEdit={true} />
        <TermTitle text={word} pronunciation={pronunciation} />
        <DefinitionsList definitions={results} />
      </div>
    </div>
  );
};

export default FullDescriptionCard;
