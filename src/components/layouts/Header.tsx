import Link from 'next/link';
import Container from './Container';

export default function Header() {
  return (
    <header className='shadow-sm bg-background sticky top-0 py-2'>
      <Container>
        <nav className='flex items-center justify-between gap-10'>
          <Link href='/'>
            <h1 className='text-h1 text-primary text-center font-bold'>
              Keeper
            </h1>
          </Link>
        </nav>
      </Container>
    </header>
  );
}
