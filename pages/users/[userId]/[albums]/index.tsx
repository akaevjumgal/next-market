import { Card } from '@/components/Card'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { Album } from '@/models/Album.model'
import { http } from '@/utils/fetcher'
import { useRouter } from 'next/router'

export default function AlbumsPage({ albums = [] }: InferGetStaticPropsType<typeof getStaticProps>) {
	const router = useRouter()
	return (
		<div className='p-4'>
			<h1>Albums:</h1>
			<div className='grid grid-cols-auto-fill gap-4'>
				{albums.map(album => (
					<Card key={album.id} onClick={() => router.push(`/users/${router.query.userId}/albums/${album.id}`)}>
						<h1>{album.title}</h1>
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
	albums: Album[]
}

export const getStaticProps: GetStaticProps<UserDetailsStaticProps> = async ({ params }) => {
	try {
		const { data: albums } = await http.get<Album[]>(`/users/${params.userId}/albums`)
		
		return {
			props: {
				albums
			}
		}
	} catch {
		return {
			notFound: true
		}
	}
}
