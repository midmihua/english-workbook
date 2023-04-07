import { TermResult } from '../../../../../features/terms';
import DefinitionItem from './DefinitionItem';

type DefinitionsListProps = {
  definitions: TermResult[];
};

const DefinitionsList = ({ definitions }: DefinitionsListProps) => {
  return (
    <div className="card-inner-container">
      <div className="definition-content">
        {definitions.map((item, idx) => (
          <DefinitionItem key={idx} definitionItem={item} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default DefinitionsList;
