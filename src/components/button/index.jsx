import PropTypes from 'prop-types';
import css from './button.module.scss'
import buttonType from './buttonType';
import buttonHtmlType from './buttonHtmlType';




function Button(props) {
	const {
		type,
		onClick,
		disabled,
		htmlType,
		children
	} = props;

	const renderType = (type) => {
		switch (type) {
			case buttonType.success:
				return `btn-success`

			case buttonType.danger:
				return `btn-danger`

			case buttonType.primary:
				return `btn-primary`

			default:
				break;
		}
	}

	const renderHtmlType = (htmlType) => {
		switch (htmlType) {
			case buttonHtmlType.button:
				return `button`;

			case buttonHtmlType.submit:
				return `submit`;

			default:
				break;
		}
	}

	return (
		<button
			type={renderHtmlType(htmlType)}
			className={`btn ${renderType(type)} ${css.button}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>

	)
}

export default Button;

Button.propTypes = {
	type: PropTypes.oneOf(Object.values(buttonType)),
	htmlType: PropTypes.oneOf(Object.values(buttonHtmlType)),
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	children: PropTypes.node
}