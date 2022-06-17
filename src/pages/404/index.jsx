import NotFoundDog from '../../assets/doguito404.svg'

const NotFoundPage = () => {
    return (
        <div className="flex justify-center items-center flex-col w-full">
            <img src={NotFoundDog} alt="NotFoundPage" className='w-80 mt-4' />
            <span className='text-4xl text-slate-700 mt-2'>Ops, esta página não existe!</span>
        </div>
    )
}

export default NotFoundPage