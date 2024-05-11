import PropTypes from 'prop-types'

function InputGroup(props) {
	const {
		id,
		label,
		value,
		onChange,
	} = props
	return (
		<div className="mb-3">
			<label htmlFor={id} className="form-label">{label}</label>
			<input value={value} onChange={onChange} className="form-control" id={id} />
		</div>

	)
}
export default InputGroup;
InputGroup.propTypes = {
	id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	label: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
}