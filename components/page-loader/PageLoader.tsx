export const PageLoader = () => {
	return (
		<dialog className='fixed w-screen h-screen bg-transparent backdrop-filter backdrop-blur-sm' open>
			<div className='h-full flex justify-center items-center'>
				<div>Loading...</div>
			</div>
		</dialog>
	)
}
