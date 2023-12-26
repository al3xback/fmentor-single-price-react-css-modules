import styles from './Card.module.scss';
import CardSection from './CardSection';

const Card = () => {
	return (
		<div className={styles.card}>
			<CardSection
				customClass={`${styles['card-block--join-community']}`}>
				<h2 className={styles['card-title']}>Join our community</h2>
				<mark className={styles['card-mark']}>
					30-day, hassle-free money back guarantee
				</mark>
				<p className={styles['card-desc']}>
					Gain access to our full library of tutorials along with
					expert code reviews. Perfect for any developers who are
					serious about honing their skills.
				</p>
			</CardSection>
			<div className={styles['card-group']}>
				<CardSection
					customClass={`${styles['card-block--monthly-subsription']}`}>
					<h3 className={styles['card-title']}>
						Monthly Subscription
					</h3>
					<p className={styles['card-price']}>
						<span className={styles.num}>$29</span>
						<span className={styles.label}>per month</span>
					</p>
					<p className={styles['card-desc']}>
						Full access for less than $1 a day
					</p>
					<a
						href="#/"
						className={`${styles['card-btn']} btn btn--primary btn--full`}>
						Sign Up
					</a>
				</CardSection>
				<CardSection customClass={`${styles['card-block--why-us']}`}>
					<h3 className={styles['card-title']}>Why Us</h3>
					<ul className={styles['card-list']}>
						<li>Tutorials by industry experts</li>
						<li>Peer &amp; expert code review</li>
						<li>Coding exercises</li>
						<li>Access to our GitHub repos</li>
						<li>Community forum</li>
						<li>Flashcard decks</li>
						<li>New videos every week</li>
					</ul>
				</CardSection>
			</div>
		</div>
	);
};

export default Card;
