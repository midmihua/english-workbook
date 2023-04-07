import { useNavigate } from 'react-router-dom';
import { PAGES } from '../../../../shared/constants';
import EditIcon from '../../../shared/icons/Edit';
import ReturnIcon from '../../../shared/icons/Return';
import SaveIcon from '../../../shared/icons/Save';
import TrashIcon from '../../../shared/icons/Trash';

type TermActionsPanelProps = {
  showEdit?: boolean;
  editUrl?: string;
  showSave?: boolean;
  saveUrl?: string;
  showTrash?: boolean;
  trashUrl?: string;
  showReturn?: boolean;
};

const TermActionsPanel = ({
  showEdit = false,
  editUrl = PAGES.VOCABULARY.TERM.edit,
  showSave = false,
  saveUrl = '',
  showTrash = false,
  trashUrl = '',
  showReturn = true,
}: TermActionsPanelProps) => {
  const navigate = useNavigate();

  const handleEditIconClick = () => navigate(editUrl);
  const handleTrashIconClick = () => navigate(trashUrl);
  const handleSaveIconClick = () => navigate(saveUrl);
  const handleReturnIconClick = () => navigate(-1);

  return (
    <div className="actions-panel">
      <div className="actions-panel-left">
        {showReturn && <ReturnIcon onClick={handleReturnIconClick} />}
      </div>
      <div className="actions-panel-right">
        {showEdit && <EditIcon onClick={handleEditIconClick} />}
        {showSave && <SaveIcon onClick={handleSaveIconClick} />}
        {showTrash && <TrashIcon onClick={handleTrashIconClick} />}
      </div>
    </div>
  );
};

export default TermActionsPanel;
