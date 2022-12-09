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
  return (
    <div className="card">
      {props.items
        .filter(
          ({ personName, policyno }) =>
            personName.startsWith(props.search) ||
            policyno.startsWith(props.search)
        )
        .map((filteredPolicy) => (
          <PolicyItem
            key={Math.random() * 100}
            personName={filteredPolicy.personName}
            phone={filteredPolicy.phone}
            email={filteredPolicy.email}
            policyno={filteredPolicy.policyno}
          />
        ))}
    </div>
  )
}

export default PolicyList
