import InfoIcon from '../../icons/Info';
import Title from '../Title';

type InfoNotification = {
  text: string;
};

const InfoNotification = ({ text }: InfoNotification) => {
  return <Title Icon={InfoIcon} title={text} classes={`info-title`} />;
};

export default InfoNotification;
