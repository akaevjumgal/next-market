import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { http } from '../../utils/fetcher'
import { User } from '../../models/User.model'
import { joinAddress } from '../../utils/address.utils'

export default function UserPage({ user }: InferGetStaticPropsType<typeof getStaticProps>) {
	const address = joinAddress(user.address)
	return (
		<div className='p-4'>
			<h1>{user.name}</h1>
			<h2 className='text-blue-500'>@{user.username}</h2>
			<p>Address: {address}</p>
			<div>
				<h2>Contacts</h2>
				<a href={`mailto:${user.email}`} className='block'>{user.email}</a>
				<a href={`tel:${user.phone}`} className='block'>{user.phone}</a>
				<a href={user.website}>{user.website}</a>
			</div>
			<p>Company: {user.company.bs}</p>
		</div>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking'
	}
}

export const getStaticProps: GetStaticProps<{ user: User }> = async ({ params }) => {
	try {
		const { data: user } = await http.get<User>(`/users/${params.userId}`)
		
		return {
			props: {
				user
			}
		}
	} catch {
		return {
			notFound: true
		}
	}
}
