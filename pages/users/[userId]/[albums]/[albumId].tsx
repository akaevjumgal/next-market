import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { Card } from '@/components/Card'
import { Photo } from '@/models/Photo.model'
import { http } from '@/utils/fetcher'
import { Thumbnail } from '@/components/thumbnail/Thumbnail'
import Head from 'next/head'

export default function PhotosPage({ photos = [] }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className='p-4'>
			<Head>
				<title>Albums</title>
			</Head>
			<h1>Photos:</h1>
			<div className='grid grid-cols-auto-fill gap-4'>
				{photos.map(photo => (
					<Card key={photo.id}>
						<Thumbnail url={photo.thumbnailUrl} caption={photo.title}/>
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

interface UserPhotosStaticProps {
	photos: Photo[]
}

export const getStaticProps: GetStaticProps<UserPhotosStaticProps> = async ({ params }) => {
	try {
		const { data: photos } = await http.get<Photo[]>(`/albums/${params.albumId}/photos`)
		
		return {
			props: {
				photos,
			}
		}
	} catch {
		return {
			notFound: true
		}
	}
}
