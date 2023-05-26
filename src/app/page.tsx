import Image from 'next/image'
import logo from '../../public/Ace.png'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <h1 className='text-3xl'>Coming Soon </h1>
      <Image src={logo} alt="Ace Analytics Logo" height={300} width={300} />
    </main>
  )
}
