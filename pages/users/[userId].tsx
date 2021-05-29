import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { http } from '../../utils/fetcher'
import { User } from '../../models/User.model'
import { joinAddress } from '../../utils/address.utils'
import { Post } from '../../models/Post.model'
import { Card } from '@/components/Card'

export default function UserPage({ user, posts = [] }: InferGetStaticPropsType<typeof getStaticProps>) {
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
			<p className='pb-3'>Company: {user.company.bs}</p>
			<hr/>
			<h1>Posts:</h1>
			<div className='grid grid-cols-auto-fill gap-4'>
				{posts.map(post => (
					<Card key={post.id}>
						<h1>{post.title}</h1>
						<p>{post.body}</p>
					</Card>
				))}
			</div>
		</div>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking'
	}
}

interface UserDetailsStaticProps {
	user: User
	posts: Post[]
}

export const getStaticProps: GetStaticProps<UserDetailsStaticProps> = async ({ params }) => {
	try {
		const { data: user } = await http.get<User>(`/users/${params.userId}`)
		const { data: posts } = await http.get<Post[]>(`/users/${params.userId}/posts`)
		
		return {
			props: {
				user,
				posts
			}
		}
	} catch {
		return {
			notFound: true
		}
	}
}
