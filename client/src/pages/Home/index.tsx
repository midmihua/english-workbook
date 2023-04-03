import HouseIcon from '../../components/shared/icons/House';
import PageTitle from '../../components/shared/titles/PageTitle';
import { PAGES } from '../../shared/constants';

const HomePage = () => {

  return (
    <section>
      <PageTitle
        Icon={HouseIcon}
        title={PAGES.HOME.name}
      />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perferendis perspiciatis cum placeat omnis quibusdam distinctio recusandae reprehenderit quae, obcaecati ab sequi pariatur aperiam beatae. Corporis accusantium, distinctio repellendus voluptatem mollitia repudiandae, numquam inventore quis consequuntur omnis cum cupiditate labore, in suscipit sit aut iure nisi delectus. Non, laudantium pariatur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perferendis perspiciatis cum placeat omnis quibusdam distinctio recusandae reprehenderit quae, obcaecati ab sequi pariatur aperiam beatae. Corporis accusantium, distinctio repellendus voluptatem mollitia repudiandae, numquam inventore quis consequuntur omnis cum cupiditate labore, in suscipit sit aut iure nisi delectus. Non, laudantium pariatur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perferendis perspiciatis cum placeat omnis quibusdam distinctio recusandae reprehenderit quae, obcaecati ab sequi pariatur aperiam beatae. Corporis accusantium, distinctio repellendus voluptatem mollitia repudiandae, numquam inventore quis consequuntur omnis cum cupiditate labore, in suscipit sit aut iure nisi delectus. Non, laudantium pariatur.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perferendis perspiciatis cum placeat omnis quibusdam distinctio recusandae reprehenderit quae, obcaecati ab sequi pariatur aperiam beatae. Corporis accusantium, distinctio repellendus voluptatem mollitia repudiandae, numquam inventore quis consequuntur omnis cum cupiditate labore, in suscipit sit aut iure nisi delectus. Non, laudantium pariatur.</p>
    </section>
  );
};

export default HomePage;