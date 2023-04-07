import GoBackButton from '../../components/shared/buttons/GoBack';
import GoHomeLink from '../../components/shared/links/GoHome';
import ErrorPageTitle from '../../components/shared/titles/ErrorPage';

const ErrorPage = () => {
  const title = `Uh no! We've got a problem.`;
  const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sunt ipsam neque dicta eaque, doloremque totam. Magni aut reprehenderit quidem. Recusandae esse blanditiis doloribus voluptas voluptatibus quos architecto similique suscipit cupiditate dolor hic laudantium amet consequuntur odit neque ipsa voluptate fugiat, eos perspiciatis eaque ut optio molestiae obcaecati quo! Dolore soluta quos nobis inventore molestias, exercitationem eos? Soluta quod non voluptatibus, praesentium vel dicta neque, perferendis voluptates beatae earum corporis impedit cum, esse animi! Enim dolores atque sint officiis voluptates perferendis amet unde, aliquid ea facere quam laboriosam impedit dicta veritatis aspernatur velit tenetur sit distinctio pariatur quis illum inventore?`;

  return (
    <section className="errorPage">
      <ErrorPageTitle />
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="btns-container">
        <GoBackButton />
        <GoHomeLink />
      </div>
    </section>
  );
};

export default ErrorPage;
