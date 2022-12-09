import './PolicyList.scss'
import PolicyItem from './PolicyItem'

const PolicyList = (props: {
  items: {
    personName: string
    phone: string
    email: string
    policyno: string
  }[]
  search: string
}) => {
  const searchFilter = props.items.filter(
    ({ personName, policyno }) =>
      personName.toUpperCase().startsWith(props.search.toUpperCase()) ||
      policyno.startsWith(props.search)
  )
  const isResult = Boolean(searchFilter.length)
  return (
    <div className="card">
      {isResult ? (
        searchFilter.map((filteredPolicy) => (
          <PolicyItem
            key={Math.random() * 100}
            personName={filteredPolicy.personName}
            phone={filteredPolicy.phone}
            email={filteredPolicy.email}
            policyno={filteredPolicy.policyno}
          />
        ))
      ) : (
        <h2 className="error-message">Policy is not found!</h2>
      )}
    </div>
  )
}

export default PolicyList
