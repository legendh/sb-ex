import './PolicyItem.scss'

const PolicyItem = (props: {
  personName: string
  phone: string
  email: string
  policyno: string
}) => {
  return (
    <div className="policy-item-container">
      <div className="policy-item-container--person-name">
        {props.personName}
      </div>
      <div className="policy-item-container--phone">
        <a href={'tel:' + props.phone}> {props.phone}</a>
      </div>
      <div className="policy-item-container--mail">
        <a href={'mailto:' + props.email}>{props.email}</a>
      </div>
      <div className="policy-item-container--policy-no">
        Policy No. {props.policyno} | {props.policyno}
      </div>
    </div>
  )
}

export default PolicyItem
