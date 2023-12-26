import styles from './CardSection.module.scss';

const CardSection = ({ children, customClass }) => {
	return (
		<section className={`${styles['card-block']} ${customClass}`}>
			{children}
		</section>
	);
};

export default CardSection;
