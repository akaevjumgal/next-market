import { Card } from '@/components/Card'
import { User } from 'models/User.model'
import { FC } from 'react'
import styles from '@/components/user-card/UserCard.module.css'

export const UserCard: FC<User> = (props) => {
	return (
		<Card>
			<div className={styles.info}>
				<h4>{props.name}</h4>
				<p>{props.username}</p>
				<p>{props.email}</p>
				<p>{props.phone}</p>
			</div>
		</Card>
	)
}
