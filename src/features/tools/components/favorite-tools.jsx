import styles from './favorite-tools.module.css';
import { Text } from 'common/components';
import { SectionLayout } from 'common/layouts';
import FavoriteToolsList from './favorite-tools-list';
import { useTools } from 'features/tools';

const FavoriteTools = () => {
  const tools = useTools();

  return (
    <SectionLayout>
      <Text className={styles.favoriteToolsHeading} variant="h2">
        My favorite tools
      </Text>
      <FavoriteToolsList tools={tools} />
    </SectionLayout>
  );
};

export default FavoriteTools;
