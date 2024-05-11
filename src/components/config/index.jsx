import PropTypes from 'prop-types';
import css from './config.module.scss';

function Config(props) {
	const {
		children
	} = props;
	return (
		<div className={css.config}>
			<div className='container'>
				{children}
			</div>
		</div>
	)
}
export default Config

Config.propTypes = {
	children: PropTypes.node
}
