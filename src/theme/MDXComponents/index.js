import MDXComponents from '@theme-original/MDXComponents';
import ResponsiveTable from '../../components/ResponsiveTable';
import {ReadingSection, ReadingSummary} from '../../components/ReadingSection';
import ReadingControls from '../../components/ReadingControls';
import ScenarioLinks from '../../components/ScenarioLinks';
export default {...MDXComponents, ScenarioLinks, table: ResponsiveTable, ReadingSection, ReadingSummary, ReadingControls};
