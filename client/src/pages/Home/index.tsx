import InfoCard from '../../components/main/cards/InfoCard';
import HomePageTitle from '../../components/shared/titles/HomePage';

const HomePage = () => {
  return (
    <section>
      <HomePageTitle />
      <div className="home-page-content">
        <p>
          Welcome to the "English Workbook" app! This powerful tool is designed to help
          you improve your English language skills by providing a comprehensive suite of
          features for learning and practicing new words and language constructions.
        </p>
        <p>
          With the "English Workbook" app, you can easily manage your vocabulary by adding
          new words and organizing them into lists. You can practice these words using
          various exercises and games that are tailored to different language learning
          needs and levels.
        </p>
        <p>
          The app also provides detailed word information, including definitions,
          synonyms, antonyms, examples, and pronunciation, to help you fully understand
          and master each word. You can track your progress and see how you're improving
          over time, and even set goals to motivate yourself and stay on track.
        </p>
        <InfoCard>
          <span className="text-bold-700">Sign up</span> or{' '}
          <span className="text-bold-700">log in</span> to access the full suite of tools
          and features!
        </InfoCard>
        <p>
          The <span className="text-bold-700">Dashboard</span> page provides users with
          key statistics, progress graphs, and configuration options. It displays
          important metrics, such as total words in the vocabulary, words learned, and
          accuracy rate, giving users a quick snapshot of their progress.
        </p>
        <p>
          The <span className="text-bold-700">Vocabulary</span> page is a versatile tool
          within our English Workbook app, empowering users to manage their vocabulary
          effectively. It offers a search functionality, allowing users to quickly find
          specific words they want to practice or review. Users can also apply filters to
          sort words based on different criteria, such as alphabetical order, or word
          type. In addition, the "Vocabulary" page enables users to add new words to their
          vocabulary and edit existing ones, providing flexibility for customization.
        </p>
        <p>
          The <span className="text-bold-700">Practice</span> page is a dynamic and
          interactive component of our English Workbook app, designed to facilitate
          engaging and effective practice sessions. Users can choose from a variety of
          games and exercises, each tailored to reinforce different aspects of their
          vocabulary. The games are designed to be engaging and enjoyable, while also
          providing opportunities for users to test their knowledge, practice word
          recognition, spelling, and more.
        </p>
        <p>
          The <span className="text-bold-700">Todo</span> page is designed to help users
          manage their tasks and goals effectively. Users can create, organize, and track
          their todos, allowing them to stay organized and focused on their language
          learning journey.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
