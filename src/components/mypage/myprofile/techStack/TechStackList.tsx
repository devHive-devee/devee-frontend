import styles from './techStackList.module.css'
import TechStackCard from '@/components/techStack/techStackCard/TechStackCard'
import { useRecoilValue } from 'recoil'
import { loginUserInfo } from '@/recoil/loginUserInfo'
import { TechStackDataType } from '@/types/admin/adminDataType'
import { useQuery } from 'react-query'
import { fetchData } from '@/utils/fetchData'
import { REACT_QUERY_KEY } from '@/constants/reactQueryKey'
import useModal from '@/hooks/useModal'
import InfoModal from '@/components/common/modal/InfoModal'
import Loading from '@/components/common/loading/Loading'

const TechStackList = ({ view }: { view?: boolean }) => {
  const userInfo = useRecoilValue(loginUserInfo)
  const userId = userInfo.userId
  const { handleCloseModal } = useModal()

  const { data, error, isLoading } = useQuery<TechStackDataType[]>(
    REACT_QUERY_KEY.loginUserTechStack,
    () => fetchData(`/users/${userId}/tech-stacks`),
  )

  if (error) {
    return (
      <InfoModal onClick={handleCloseModal} buttonText="확인">
        에러가 발생했습니다.
        <br /> 새로고침 해주세요.
      </InfoModal>
    )
  }

  if (!data) {
    return null
  }

  if (isLoading) {
    return <Loading />
  }

  return data.length === 0 ? null : (
    <div className={`${view ? styles.view : styles.techStackList}`}>
      {data.map((item: TechStackDataType) => (
        <TechStackCard key={item.id} name={item.name} imageUrl={item.image} />
      ))}
    </div>
  )
}

export default TechStackList
