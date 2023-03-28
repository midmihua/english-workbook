import TermItem, { TermItemProps } from './term';

const TermsList = () => {
  const words: TermItemProps[] = [
    {
      text: 'car1',
      description: 'a motor vehicle with four wheels; usually propelled by an internal combustion engine'
    },
    {
      text: 'car2',
      description: 'a motor vehicle with four wheels; usually propelled by an internal combustion engine'
    },
    {
      text: 'car3',
      description: 'a motor vehicle with four wheels; usually propelled by an internal combustion engine'
    },
    {
      text: 'car4',
      description: 'a motor vehicle with four wheels; usually propelled by an internal combustion engine'
    },
    {
      text: 'car5',
      description: 'a motor vehicle with four wheels; usually propelled by an internal combustion engine'
    },
  ];

  return (
    <div className="cards-list">
      {
        words.map(({ text, description }) => (
          <TermItem
            key={text}
            text={text}
            description={description}
          />
        ))
      }
    </div>
  );
};

export default TermsList;
