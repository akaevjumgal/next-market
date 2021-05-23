import { Card, CardProps } from '@/components/Card'
import { User } from 'models/User.model'
import { FC } from 'react'
import styles from '@/components/user-card/UserCard.module.css'
import classNames from 'classnames'

interface UserCardComponentProps extends CardProps {}

interface UserCardProps {
	user: User
}

export const UserCard: FC<UserCardProps & UserCardComponentProps> = ({ user, className, ...nativeProps }) => {
	return (
		<Card className='hover:shadow-lg cursor-pointer'>
			<div className={classNames(styles.info, className)} {...nativeProps}>
				<h4>{user.name}</h4>
				<p>{user.username}</p>
				<p>{user.email}</p>
				<p>{user.phone}</p>
			</div>
		</Card>
	)
}
