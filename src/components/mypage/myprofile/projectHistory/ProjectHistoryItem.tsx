import { ProjectHistoryDataType } from '@/types/users/projectHistoryDataType'
import styles from './projectHistoryItem.module.css'

const ProjectHistoryItem = ({
  projectName,
  totalAverageScore,
}: ProjectHistoryDataType) => {
  return (
    <div className={styles.projectItem}>
      <span>{projectName}</span>
      <span>・</span>
      <span>팀원평균점수 </span>
      <span className={styles.score}> {totalAverageScore} </span>
      <span>/ 25점</span>
    </div>
  )
}

export default ProjectHistoryItem
