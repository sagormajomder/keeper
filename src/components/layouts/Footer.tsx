'use client';
import { useState } from 'react';
import Container from './Container';

export default function Footer() {
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer className='border-t border-border bg-background mt-20'>
      <Container>
        <div className='py-8'>
          <div className='flex flex-col md:flex-row items-center gap-8 mb-8 justify-between'>
            {/* Brand Section */}
            <div className='flex flex-col gap-4'>
              <h3 className='text-lg font-semibold text-foreground'>Keeper</h3>
              <p className='text-sm text-muted-foreground'>
                A simple note-taking app where you can write your thoughts and
                ideas.
              </p>
            </div>
            <p className='text-xs text-muted-foreground md:self-end self-center'>
              © {currentYear} Keeper. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
